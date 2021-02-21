export const updateMoney = (money) => {
    return (dispatch, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        
        firebase.auth().updateMoney2(
            money.money,
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).update({
                money: money.money
            })
    }).then(() => {
        dispatch({ type: 'UPDATE_SUCESS'});
    }).catch((err) => {
        dispatch({ type: 'UPDATE_ERROR', err});
    })
}
}