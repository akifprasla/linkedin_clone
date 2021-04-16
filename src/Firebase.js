import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyBx1ha0bICpXSYP-a66DTwhwIxu4nR_1Ks",
//   authDomain: "linkedin-clone-a2b39.firebaseapp.com",
//   projectId: "linkedin-clone-a2b39",
//   storageBucket: "linkedin-clone-a2b39.appspot.com",
//   messagingSenderId: "771549242054",
//   appId: "1:771549242054:web:b76db84fe58b5e72c72dc7"
// };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}

