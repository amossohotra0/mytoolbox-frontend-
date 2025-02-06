import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const RegisterForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    onSubmit({ email, password });
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg bg-white border border-orange-200 shadow-lg rounded-2xl p-6 sm:p-10 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-600">Create an Account</h2>
        <p className="text-gray-500 text-sm sm:text-base mt-1">Sign up to get started</p>
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

        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="px-4 sm:px-6"
        />
      </div>

      <div className="pt-2">
        <Button onClick={handleSubmit} disabled={!email || !password || !confirmPassword} className="w-full">
          Register
        </Button>
      </div>

      <div className="text-center text-sm mt-2">
        <p className="text-gray-500">Already have an account? <a href="/login" className="text-orange-600 hover:underline">Login</a></p>
      </div>
    </div>
  );
};

export default RegisterForm;
