import Button from "../Elements/button/Button";
import InputForm from "../Elements/input";

const FormRegister = () => {
  return (
    <form>
      <InputForm
        label={"Fullname"}
        type={"text"}
        placeholder={"Insert your full name here"}
        name={"fullname"}
      ></InputForm>
      <InputForm
        label={"Email"}
        type={"email"}
        placeholder={"example@gmail.com"}
        name={"email"}
      ></InputForm>
      <InputForm
        label={"Password"}
        type={"password"}
        placeholder={"********"}
        name={"password"}
      ></InputForm>
      <InputForm
        label={"Confirm Password"}
        type={"password"}
        placeholder={"********"}
        name={"password"}
      ></InputForm>
      <Button>Login</Button>
    </form>
  );
};

export default FormRegister;
