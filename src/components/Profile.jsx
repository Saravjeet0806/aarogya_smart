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
        name: user.displayName || "Saravjeet",
        email: user.email,
        goals: "Achieve your fitness goals and stay healthy!",
      });
    }
  }, [user, loading, navigate]);

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-blue-100 via-white to-purple-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Welcome, {profileData.name}!
        </h2>
        <p className="text-xl text-center text-gray-600 mb-10">
          Stay on top of your fitness journey and track your progress. Keep striving for your goals!
        </p>
        
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-auto">
          <div className="text-center mb-6">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-3xl font-semibold text-gray-800 mb-2">
              {profileData.name}
            </h3>
            <p className="text-gray-500 text-lg mb-4">{profileData.email}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">Fitness Goals</span>
              <span className="text-lg text-gray-600">{profileData.goals}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">Email</span>
              <span className="text-lg text-gray-600">{profileData.email}</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate('/edit-profile')}
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
