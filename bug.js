```javascript
// Incorrect usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  // Incorrect: Directly accessing user.uid without null check
  console.log("User UID:", user.uid);
  // ... rest of the code
});
```