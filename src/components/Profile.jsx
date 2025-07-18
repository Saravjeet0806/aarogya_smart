import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/img-profile.jpg'; // adjust path if needed


const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [profileData, setProfileData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate('/');
    } else if (user) {
      setProfileData({
        name: user.displayName || 'User',
        email: user.email,
        goals: 'Achieve your fitness goals and stay healthy!',
      });
    }
  }, [user, loading, navigate]);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background:
          'linear-gradient(243.4deg, rgb(0, 215, 206) 13%, rgb(0, 132, 255) 98%)',
      }}
    >
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center gap-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800">
          Welcome, {profileData.name}!
        </h2>

        <p className="text-center text-gray-700 text-lg sm:text-xl max-w-2xl">
          Stay on top of your fitness journey and track your progress. Keep striving for your goals!
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 w-full">
          {/* Profile image */}
          <div className="flex-shrink-0">
            <img
  src={profilePic}
  alt="Profile"
  className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
/>

          </div>

          {/* Profile details */}
          <div className="w-full">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                {profileData.name}
              </h3>
              <p className="text-gray-600 text-md">{profileData.email}</p>
            </div>

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Fitness Goals:</span>
                <span className="text-right text-gray-600 max-w-xs">
                  {profileData.goals}
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Email:</span>
                <span className="text-right text-gray-600">{profileData.email}</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigate('/edit-profile')}
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-md"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
