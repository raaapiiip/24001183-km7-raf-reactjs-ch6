import Input from "./input";
import Label from "./label";

const InputForm = ({ label, name, type, placeholder }) => {
  return (
    <>
      return <label htmlFor={name}>{label} </label>
      <input type={type} placeholder={placeholder} name={name} />
    </>
  );
};

export default InputForm;
