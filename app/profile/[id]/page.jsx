"use client";

import { useEffect, useState } from "react";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
 
  const [userName, setUserName] = useState("");

  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
      console.log(data);
      data.map((post)=>{
        setUserName(post.creator.userName);
      })
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;