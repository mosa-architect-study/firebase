import * as functions from 'firebase-functions';
import *  as admin from 'firebase-admin';
import * as testing from "@firebase/testing"

const createFirestore = () => {
    if (process.env.FUNCTIONS_EMULATOR) {
        const store = testing.initializeAdminApp({
            projectId:"haga-number-of-vistors"
        }).firestore()
        // store.collection("vistors").doc("history").set({
        //     count:0
        // })
        return store
    } else {
        admin.initializeApp()
        return admin.firestore();
    }
   
}

const store = createFirestore()

export const visit = functions.region("asia-northeast1").https.onRequest(async (request, response) => {

    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    const history = store.collection("vistors").doc("history")

    const e = await history.get();
    const data = e.data();
    if(data){
        history.set({
            count:data.count + 1
        })
        response.json(e.data())
    } else {
        response.send("Data Not Found")
    }

});
