import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";

import { auth } from "../firebase/firebaseConfig";

import { login } from "../actions/auth";

import { Navbar } from "../components/ui/NavBar";

import { AuthRouter } from "./AuthRouter";

import { EduplayScreen } from "../components/eduPlay/EduplayScreen";

import { PrivateRoute } from "./PrivateRoute";

import { PublicRoute } from "./PublicRoute";

import { startLoadingNotes } from "../actions/notes";

// inicio despues de los imports

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));

        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (checking) {
    return <h1>Cargando...</h1>;
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* PUBLICAS */}
        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          }
        />

        {/* PRIVADAS */}
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <EduplayScreen />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
