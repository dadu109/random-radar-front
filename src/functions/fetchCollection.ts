import firebase from '../firebase';
const db = firebase.firestore();

export const fetchCollection = async (collection: string): Promise<any> => {
    const snap = await db.collection(collection).get();
    return snap.docs.map(doc => doc.data());
}