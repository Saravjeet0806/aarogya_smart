import React from 'react';

const Profile = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Profile</h2>
      <p className="text-lg mb-4">
        View and edit your personal profile information. Keep track of your fitness goals, achievements, and progress.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-2">User Information</h3>
        <p className="mb-2">Name: [Your Name]</p>
        <p className="mb-2">Email: [Your Email]</p>
        <p className="mb-2">Goals: [Your Fitness Goals]</p>
      </div>
      {/* Add more content or interactive features here */}
    </section>
  );
};

export default Profile;
