import React from "react";

const Profile = ({ profile, aff }) => {
  return (
    <div className="mask">
      <h1>{profile.fullname}</h1>
      <h2>{profile.profession}</h2>
      <img src={profile.image} />
      <p>{profile.bio}</p>
      <button onClick={() => aff(profile.fullname)}>click</button>
    </div>
  );
};

export default Profile;
