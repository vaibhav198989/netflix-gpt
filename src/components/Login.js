import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setError] = useState(null);
  const dispatch = useDispatch();
  const Email = useRef();
  const Name = useRef();
  const Password = useRef();
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = validateForm(Email.current.value, Password.current.value);
    console.log(message);
    setError(message);
    if (message) return;
    if (!signInForm) {
      console.log("singup");
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Name.current.value,
          })
            .then(() => {
              const {uid, email, displayName} = auth.currentUser;
                      dispatch(addUser({uid:uid, email:email, displayName:displayName}));
              // Profile updated!
              // ...
        
            })
            .catch((error) => {
              const errorMessage = error.message;
              // An error occurred
              setError(errorMessage);
              // ...
            });
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
          alt="Background Image"
        />
      </div>
      <form className="w-3/12 absolute bg-black bg-opacity-80 p-12 m-36 mx-auto right-0 left-0 text-white rounded-lg z-50">
        <h1 className="text-3xl py-4 font-bold">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            type="text"
            ref={Name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          type="text"
          ref={Email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          ref={Password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <p className="font-bold text-red-800 mb-2">{errorMessage}</p>
        <button
          className="bg-red-600 text-white p-4 my-4 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {signInForm
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
