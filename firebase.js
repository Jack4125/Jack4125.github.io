const contactForm = document.querySelector('.contact-form');

// https://www.youtube.com/watch?v=4d-gIPGzmK4&list=PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB&index=1
// Firebase simulator location path example: "/messages/7wRp8VOY4AHhu4VPZk7X"
var firebaseConfig = {
  apiKey: 'AIzaSyB2rA57IguGUtjW1X_bLoJgFM0_K16VVQU',
  authDomain: 'profile-a1067.firebaseapp.com',
  databaseURL: 'https://profile-a1067.firebaseio.com',
  projectId: 'profile-a1067',
  storageBucket: 'profile-a1067.appspot.com',
  messagingSenderId: '844308211892',
  appId: '1:844308211892:web:feecce52e048442e494fe1',
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

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
