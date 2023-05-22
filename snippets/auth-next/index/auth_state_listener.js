// This snippet file was generated by processing the source file:
// ./auth-next/index.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_state_listener_modular]
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
// [END auth_state_listener_modular]