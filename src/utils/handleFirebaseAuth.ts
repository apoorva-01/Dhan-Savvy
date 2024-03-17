import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../data/firebase";

export function handleLogin(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {console.log("userCredential",userCredential)})
    .catch((error) => console.log(error));
}

export function handleSIgnUp(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {console.log("userCredential",userCredential)})
    .catch((error) => console.log(error));
}

export function handleSignOut() {
  signOut(auth)
    .then(() => {})
    .catch((error) => console.log(error));
}
