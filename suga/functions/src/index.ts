import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.region("asia-northeast1").https.onRequest((request, response) => {
 response.send("Hello from Firebase!ガースー関数");
});