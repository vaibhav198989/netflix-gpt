import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constant";
import { userIcon } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);
  const handleSignOut = () => {
    // Sign out logic here
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.

      })
      .catch((error) => {
        // An error happened.
      });
    console.log("User signed out");
  };
  return (
    <div className="absolute px-20 w-screen py-2 bg-gradient-to-b from-black z-50 text-white">
      <img
        src={Logo}
        alt="Netflix GPT Logo"
        className="w-44"
      />
      {user && <div className="absolute right-8 top-2 flex">
      <p className="my-7">{user?.displayName}</p>
        <img
          src={userIcon}
          alt="user-icon"
          className="w-10 h-10 m-4 rounded-lg  cursor-pointer"
        />
        <button className="my-4" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
