from flask import Flask, render_template, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import torch
from chat import get_response

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bala.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

# Load your model here if needed
# FILE = 'path_to_your_model.pth'
# data = torch.load(FILE, weights_only=True)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

@app.route("/", methods=["GET"])
def index_get():
    return render_template("base.html")

# Define route for chatbot prediction
@app.route("/predict", methods=["POST"])
def predict():
    text = request.get_json().get("message")
    response = get_response(text)  # Assuming get_response is defined
    message = {"answer": response}
    return jsonify(message)

@app.route('/api/signup', methods=['POST'])
def recipient_register():
    data = request.get_json()
    name = data.get('name')
    print("balaji")
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({'error': 'All fields are required'}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'error': 'User already exists'}), 400

    new_user = User(name=name, email=email, password=password)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

    return jsonify({'message': 'User created successfully', 'user': {'name': new_user.name, 'email': new_user.email}}), 201

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    user = User.query.filter_by(email=email).first()

    if user and user.password == password:
        session['logged_in'] = True
        return jsonify({'message': 'Login successful'}), 200
        
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('logged_in', None)
    return jsonify({'message': 'Logged out successfully'})

if __name__ == '__main__':
    with app.app_context():
        try:
            db.create_all()
            print("Database tables created successfully.")
        except Exception as e:
            print(f"Error creating database tables: {e}")
    app.run(debug=True)
