const HoverButton = ({ children, handerAction }) => {
  return (
    <div>
      <button onClick={handerAction}>{children}</button>
    </div>
  );
};

export default HoverButton;