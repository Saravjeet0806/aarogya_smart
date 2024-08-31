import React from 'react';

const Community = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Community</h2>
      <p className="text-lg mb-4">
        Connect with others in our fitness community. Share your progress, join groups, and participate in discussions.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-2">Join the Conversation</h3>
        <ul className="list-disc pl-5">
          <li className="mb-2">Forum: Discuss fitness topics with others</li>
          <li className="mb-2">Groups: Join fitness groups based on interests</li>
          <li className="mb-2">Events: Participate in community fitness events</li>
        </ul>
      </div>
      {/* Add more content or interactive features here */}
    </section>
  );
};

export default Community;
