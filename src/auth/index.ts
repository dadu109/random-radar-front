import firebase from '../firebase'
firebase.auth().useDeviceLanguage();

const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider();

export const loginWithGoogle = () => {
  return firebase.auth()
    .signInWithPopup(provider)
    .then(async (result) => {
      const credential = result.credential;
      const user = result.user;
      const allowedToWrite = await checkIfAllowedToWrite(user ? user.uid : '');

      return { credential, user, allowedToWrite }
    }).catch((error) => {
      console.warn(error.message)
    });
}

export const logout = () => {
  return firebase.auth().signOut().then(() => {
    return true
  }).catch((error) => {
    console.warn(error.message)
  });
}

export const checkIfAllowedToWrite = async (uid: string) => {
  const userRef = await db.collection('adminUsers').doc(uid)
  const allow = await userRef.get().then(snap => snap.exists);
  return allow
}