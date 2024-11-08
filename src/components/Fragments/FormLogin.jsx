import { Button } from "../Elements/button/Button";
import { InputForm } from "../Elements/input";

export const FormLogin = () => {
  return (
    <form>
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
      <Button>Login</Button>
    </form>
  );
};
