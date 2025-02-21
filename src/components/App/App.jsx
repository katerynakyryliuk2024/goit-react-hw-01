//import { useState } from "react";//

import css from "./App.module.css";

import Profile from "../Profile/Profile";
import userData from "../userData.json";
import İnfoList from "../İnfoList/İnfoList";

console.log(userData);

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
      />
      <İnfoList
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
    </div>
  );
}
