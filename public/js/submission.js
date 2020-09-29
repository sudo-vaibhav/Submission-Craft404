// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBmq3mn0CHerHx0b06Lrl3X2D_o5qObzbk',
  authDomain: 'craft-404.firebaseapp.com',
  databaseURL: 'https://craft-404.firebaseio.com',
  projectId: 'craft-404',
  storageBucket: 'craft-404.appspot.com',
  messagingSenderId: '966599375855',
  appId: '1:966599375855:web:815af3ea86d307d84fd41a',
  measurementId: 'G-VL2Y3V8CCC',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
window.addEventListener('DOMContentLoaded', () => {
  const submissionForm = document.querySelector('#submissionForm');
  submissionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const figmaLink = submissionForm['figma'].value;
    const name = submissionForm['name'].value;
    try {
      const result = await db.collection('submissions').add({
        name,
        figmaLink,
      });
      console.log('submitted', result.id);
    } catch (err) {
      console.log(err);
    }
  });
});
