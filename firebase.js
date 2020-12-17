const contactForm = document.querySelector('.contact-form');

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDEthsALu2_sTcuoRE88uwoFYSnjgFDg-A",
    authDomain: "profile-13744.firebaseapp.com",
    projectId: "profile-13744",
    storageBucket: "profile-13744.appspot.com",
    messagingSenderId: "990941745211",
    appId: "1:990941745211:web:0efc17ee1fbbc27fa88c1e",
    measurementId: "G-Y0PSN0ZNTZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Firebase simulator location path example: "/messages/7wRp8VOY4AHhu4VPZk7X"
const db = firebase.firestore();
db.settings({ timestampsInSnapshot: true });

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('messages')
    .add({
      email: contactForm.email.value,
      subject: contactForm.subject.value,
      message: contactForm.message.value,
    })
    .then((res) => {
      contactForm.email.value = '';
      contactForm.subject.value = '';
      contactForm.message.value = '';
      alert(
        'Message Sent!\n(For faster reply, please email or call me directly)'
      );
    })
    .catch((err) => {
      alert('Message NOT sent!\nError: ' + err);
    });
});
