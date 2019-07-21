import * as functions from 'firebase-functions';
import *  as admin from 'firebase-admin';
import * as testing from "@firebase/testing"
import * as express from "express"

const app = express();

const createFirestore = () => {
    if (process.env.FUNCTIONS_EMULATOR) {
        const store = testing.initializeAdminApp({
            projectId:"testes"
        }).firestore()
        return store
    } else {
        admin.initializeApp()
        return admin.firestore();
    }
}
const store = createFirestore()

app.get("/functions/visit",async (_,res)=>{

    const history = store.collection("vistors").doc("history")

    const e = await history.get();
    const data = e.data();
    if(data){
        history.set({
            count:data.count + 1
        })
        res.json(e.data())
    } else {
        res.json({
            message:"Err! Data Not Found"
        })
    }
})


export const api = functions.https.onRequest(app);
