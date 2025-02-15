import LoginForm from '../components/feature/LoginForm';


const LoginPage = ({ onSubmit }) => {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4 py-12">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;