import React from 'react';

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
      <div>
        <h1>{message}</h1>
        <p>Welcome to your first React app with TypeScript.</p>
      </div>
  );
};

export default App;