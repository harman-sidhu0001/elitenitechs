import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-amber-600 mb-4">✅ Test Page Working!</h1>
        <p className="text-gray-600">If you can see this, the routing is working correctly.</p>
      </div>
    </div>
  );
};

export default TestPage;