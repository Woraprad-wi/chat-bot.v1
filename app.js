const messages = {
    1: "Hello World!",
    2: "Good morning!",
    3: "Stay positive.",
    4: "Keep going.",
    5: "Work hard.",
    6: "Be happy.",
    7: "Enjoy life.",
    8: "Stay focused.",
    9: "Never give up.",
    10: "Take a break.",
    11: "Dream big.",
    12: "Trust yourself.",
    13: "Keep smiling.",
    14: "Love yourself.",
    15: "Stay humble.",
    16: "Stay strong.",
    17: "Be kind.",
    18: "Live simply.",
    19: "Do your best.",
    20: "Believe in yourself."
};

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();

    if (message !== "") {
        addMessage(message, 'user-message');
        input.value = '';
        
        setTimeout(() => {
            const randomMessage = getRandomMessage();
            addMessage(randomMessage, 'bot-message');
        }, 500); 
    }
}

function addMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', className);
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getRandomMessage() {
    const keys = Object.keys(messages);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return messages[randomKey];
}

// Add event listener for the Enter key
document.getElementById('message-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents the default action of the Enter key (e.g., form submission)
        sendMessage();
    }
});
