import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [profileData, setProfileData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      // Redirect to login page if user is not authenticated
      navigate('/');
    } else if (user) {
      // Set user profile data
      setProfileData({
        name: user.displayName || "Not provided",
        email: user.email,
        goals: "Your Fitness Goals",
      });
    }
  }, [user, loading, navigate]);

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Profile</h2>
      <p className="text-lg mb-4">
        View and edit your personal profile information. Keep track of your fitness goals, achievements, and progress.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-2">User Information</h3>
        <p className="mb-2">Name: {profileData.name}</p>
        <p className="mb-2">Email: {profileData.email}</p>
        <p className="mb-2">Goals: {profileData.goals}</p>
      </div>
    </section>
  );
};

export default Profile;
