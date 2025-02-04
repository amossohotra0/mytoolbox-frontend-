import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../common/Input';
import Button from '../common/Button';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    onSubmit({ email, password });
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg bg-white border border-orange-200 shadow-lg rounded-2xl p-6 sm:p-10 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-600">Welcome Back</h2>
        <p className="text-gray-500 text-sm sm:text-base mt-1">Login to your account</p>
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="space-y-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="px-4 sm:px-6"
        />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="px-4 sm:px-6"
        />
      </div>

      <div className="flex justify-between text-sm mt-2 px-1">
        <Link to="/register" className="text-orange-600 hover:underline">
          Create account
        </Link>
        <Link to="/forgot-password" className="text-orange-600 hover:underline">
          Forgot password?
        </Link>
      </div>

      <div className="pt-2">
        <Button onClick={handleSubmit} disabled={!email || !password} className="w-full">
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
