import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user)
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
    <div className="absolute px-20 w-screen py-2 bg-gradient-to-b from-black z-50">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix GPT Logo"
        className="w-44"
      />
      {user && <div className="absolute right-8 top-2 flex">
      <p className="my-7">{user?.displayName}</p>
        <img
          src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
