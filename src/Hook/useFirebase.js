import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import firebaseInitialize from "../Authentication/firebaseInitialize";

firebaseInitialize();

const useFirebase = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const createNewUser = (fullName, email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        updateProfileName(fullName);
        userVerification();
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        // const errorMessage = error.message;
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const updateProfileName = (fullName) => {
    updateProfile(auth.currentUser, {
      displayName: fullName,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const userVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      alert("Successfully sent verification mail");
    });
  };

  const userLogin = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          setLoggedInUser(user);
          const destination = location.state?.from || "/";
          navigate(destination);
        } else {
          alert("Please email verify first");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        // const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          setLoggedInUser(user);
        }
      } else {
        setLoggedInUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);

  const userLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setLoggedInUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    loggedInUser,
    setLoggedInUser,
    isLoading,
    setIsLoading,
    createNewUser,
    userLogin,
    userLogout,
  };
};

export default useFirebase;
