import { FC } from 'react';

const Login: FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Watcher</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {/* TODO: Implement Google OAuth */}}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login; 