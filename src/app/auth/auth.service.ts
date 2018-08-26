import * as firebase from "firebase";

export class AuthService {
    signupUser(email: string, password: string) {
        console.log("Hello");
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).catch(error => {
            console.log(error);
        });
    }
}
