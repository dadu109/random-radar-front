import firebase from '../firebase'
const db = firebase.firestore();

export const checkFollowed = async (id: string): Promise<boolean> => {
    const handle = await db.collection('followed').doc(id).get();
    return handle.exists;
}

export const follow = (artist: any) => {
    db.collection('followed')
        .doc(artist.id)
        .set(artist)
        .then(() => {console.log(artist)})
        .catch(err => {console.log(err)})
}

export const unfollow = ({id}: any) => {
    db.collection('followed').doc(id).delete()
}