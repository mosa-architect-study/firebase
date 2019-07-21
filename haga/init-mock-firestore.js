const testing = require("@firebase/testing")
const store = testing.initializeAdminApp({
    projectId:"testes"
}).firestore()
store.collection("vistors").doc("history").set({
    count:0
})
    .catch(console.log)
    .then(() => process.exit(0))