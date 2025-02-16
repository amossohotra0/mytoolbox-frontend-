import RegisterForm from '../components/feature/RegisterForm';

const RegisterPage = () => {
  const handleRegister = (userData) => {
    console.log('Registering with:', userData);
    // Call your register API here
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4 py-12">
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
