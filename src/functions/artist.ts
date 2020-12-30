import firebase from '../firebase'
const db = firebase.firestore();

export const follow = (artist: any) => {
    db.collection('followed')
        .doc(artist.id)
        .set(artist)
        .then(() => {console.log(artist)})
        .catch(err => {console.log(err)})
}

export const unfollow = (artist: any) => {
    const {id} = artist;
    db.collection('followed').where('id','==',id)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                doc.ref.delete();
            });
        });
}