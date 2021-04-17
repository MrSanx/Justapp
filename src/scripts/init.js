 // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      var firebaseConfig = {
        apiKey: "AIzaSyDukfAijUKbO_Ji5mFAwQrOPqUly9jakRg",
        authDomain: "justapp-3f5e5.firebaseapp.com",
        databaseURL: "https://justapp-3f5e5-default-rtdb.firebaseio.com",
        projectId: "justapp-3f5e5",
        storageBucket: "justapp-3f5e5.appspot.com",
        messagingSenderId: "83155656759",
        appId: "1:83155656759:web:0983a699d5830ce56e1fb2",
        measurementId: "G-KHXE8QNJ1H"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      //make database and authentication references
      const db = firebase.firestore();
      const auth = firebase.auth();

      //update firestore settings
      db.settings({ timestampsInSnapshots: true });