import * as firebase from 'firebase';

export class AuthService {
    token: string;
    signupUser(email: string, password: string) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).catch(error => {
            console.log(error);
        });
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                /* firebase.auth().currentUser.getIdToken()
                .then() */
            }).catch(error => {
                console.log(error);
            });
    }

    /* getToken() {
        return firebase.auth().currentUser.getIdToken()
    } */
}
