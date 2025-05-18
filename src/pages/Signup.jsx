import React from 'react';
import SignupForm from '../components/auth/SignupForm';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center">
        <div className="mb-8">
          <img
            src="/ai.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup; 