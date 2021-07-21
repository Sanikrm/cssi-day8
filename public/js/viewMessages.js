const passcodeInput = document.querySelector('#passcodeInput');
const messageDiv = document.querySelector('#message');
let secrets = "";
const mbutton = document.querySelector('viewMsg');
const getMessages = () => {
 const messagesRef = firebase.database().ref();
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
     findmessage(data); 
 });
}

mButton.addEventListener("click", () => {
    const passcodeAttempt = document.querySelector('#passcodeInput').value;
    passcodeInput.style.display = 'none';
    console.log("hello");
    const findmessage = (info) => {
        for (message in info) {
            if (message.passcode === passcodeAttempt) {
                secrets = secrets + messageData;
            }
        }
    }
});
// Hide the passcode view
 

//
 
// Show the message
 
 
 messageDiv.innerHTML = secrets;
 
// Look through the messages retrived from the database to see if there is anyone one matching the input
 

 
