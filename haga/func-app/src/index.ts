import * as functions from 'firebase-functions';
import *  as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const store = admin.firestore();

store.collection("vistors").doc("history").set({
    count:0
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const visit = functions.region("asia-northeast1").https.onRequest((request, response) => {

    const history = store.collection("vistors").doc("history")
    
    history.get().then(e => {
        const data = e.data();
        if(data){
            history.set({
                count:data.count + 1
            })
            response.json(e.data())
        } else {
            response.send("Data Not Found")
        }
        
    })
});
