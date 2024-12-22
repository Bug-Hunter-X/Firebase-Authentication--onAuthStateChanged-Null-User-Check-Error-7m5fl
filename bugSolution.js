```javascript
// Correct usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  // Correct: Check if the user object is null before accessing properties
  if (user) {
    console.log("User UID:", user.uid);
    // Access other user properties here
  } else {
    console.log("User is not authenticated.");
  }
});
```