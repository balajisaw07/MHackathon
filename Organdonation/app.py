from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bala.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)  # Enable CORS for all routes

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

@app.route('/api/signup', methods=['POST'])
def recipient_register():
    if request.method == 'POST':
        data = request.get_json()
        print("Received signup request:", data)
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        print("Received signup request:", name)

        if not name or not email or not password:
            return jsonify({'error': 'All fields are required'}), 400
            
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({'error': 'User already exists'}), 400
     
        new_user = User(name=name, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User created successfully', 'user': {'name': new_user.name, 'email': new_user.email}}), 201

    return jsonify({'error': 'Invalid method'}), 405


@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    # Find the user by email
    user = User.query.filter_by(email=email).first()

    if user and user.password == password:
        return jsonify({'message': 'Login successful'}), 200
        
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('logged_in', None)
    return jsonify({'message': 'Logged out successfully'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

