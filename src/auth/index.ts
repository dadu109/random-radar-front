import firebase from '../firebase'
firebase.auth().useDeviceLanguage();

const provider = new firebase.auth.GoogleAuthProvider();

export const loginWithGoogle = () => {
  return firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential;
      const user = result.user;

      return { credential, user }
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