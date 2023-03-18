import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const Sidebar = () => {

   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //  early return
  if(!isMenuOpen) return null;


  return ( 
    <div className="w-48 p-5 shadow-md">
       <ul>
          <li><Link to="/">Home</Link> </li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
      <div className="py-2">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Games</li>
          <li>Moves</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Games</li>
          <li>Moves</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
