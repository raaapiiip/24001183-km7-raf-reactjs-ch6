const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} style={{ display: "block" }}>
      {children}
    </label>
  );
};

export default Label;