import { Link } from "react-router-dom";
import { FormRegister } from "../components/Fragments/FormRegister";
import { AuthLayout } from "../Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p>
        Have an account? <Link to="/login">Login</Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;