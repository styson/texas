const admin = require("firebase-admin");
const account = require("../config/texas-2022-firebase-adminsdk-d7p8v-930cf1a511.json");

admin.initializeApp({
  credential: admin.credential.cert(account)
});
