import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import Swal from "sweetalert2";

import { auth, googleAuthProvider } from "../firebase/firebaseConfig";

import { types } from "../types/types";
import { finishLoading, starLoading } from "./ui";
import { noteLogout } from "./notes";

// LOGIN EMAIL/PASSWORD
export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      const user = result.user;

      dispatch(login(user.uid, user.displayName));

      dispatch(finishLoading());
    } catch (error) {
      console.log(error);
      dispatch(finishLoading());
      Swal.fire("Error", error.message, "error");
    }
  };
};

// REGISTER
export const startRegisterAll = (email, password, nombre) => {
  return async (dispatch) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = result.user;

      // actualizar nombre
      await updateProfile(user, {
        displayName: nombre,
      });

      dispatch(login(user.uid, nombre));
    } catch (error) {
      console.log(error);
      Swal.fire("Error", error.message, "error");
    }
  };
};

// GOOGLE LOGIN
export const startGoogleLogin = () => {
  return async (dispatch) => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);

      const user = result.user;

      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.log(error);
    }
  };
};

// LOGIN ACTION
export const login = (uid, displayName) => {
  return {
    type: types.login,

    payload: {
      uid,
      displayName,
    },
  };
};

// LOGOUT ACTION
export const logout = () => {
  return {
    type: types.logout,
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);

      dispatch(logout());
      dispatch(noteLogout());
    } catch (error) {
      console.log(error);
    }
  };
};
