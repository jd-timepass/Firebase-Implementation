import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, signOut } from "../config/firebase";

export const signup = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const token = await res.user.getIdToken();
    localStorage.setItem("token", token);
    return res;
}

export const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const token = await res.user.getIdToken();
    localStorage.setItem("token", token);
    return res;
};

export const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
}