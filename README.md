# Firebase Authentication: onAuthStateChanged Null User Check

This example demonstrates a common error in Firebase's `onAuthStateChanged` where the user object is accessed without first checking for null.  This can lead to runtime errors when the authentication state changes.

The `bug.js` file showcases the incorrect implementation, while `bugSolution.js` provides the corrected version.

## Setup

Ensure you have the Firebase JavaScript SDK installed and properly configured in your project.