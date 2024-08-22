class Chatbot {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatbox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button'),
        };
        
        this.state = false;
        this.messages = [];
        this.display(); // Initialize the event listeners
    }
    
    display() {
        const { openButton, chatbox, sendButton } = this.args;
    
        openButton.addEventListener('click', () => this.toggleState(chatbox));
    
        sendButton.addEventListener('click', () => this.onSendButton(chatbox));
    
        const node = chatbox.querySelector('input');
        node.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.onSendButton(chatbox);
            }
        });
    }
    
    toggleState(chatbox) {
        this.state = !this.state;

        if (this.state) {
            chatbox.classList.add('chatbox--active');
        } else {
            chatbox.classList.remove('chatbox--active');
        }
    }
    
    onSendButton(chatbox) {
        const inputField = chatbox.querySelector('input');
        const message = inputField.value;
        if (message === "") {
            return;
        }

        this.messages.push({ name: "User", message: message });
        this.updateChatText(chatbox);

        // Clear the input field
        inputField.value = '';

        // Here you could send the message to your backend (e.g., a Flask route)
        // and handle the response.
    }
    
    updateChatText(chatbox) {
        const chatMessageBox = chatbox.querySelector('.chatbox__messages');
        chatMessageBox.innerHTML = this.messages
            .map(msg => `<div class="message ${msg.name === 'User' ? 'user' : 'bot'}">${msg.message}</div>`)
            .join('');
    }
}

// Instantiate the Chatbot
const chatbot = new Chatbot();
