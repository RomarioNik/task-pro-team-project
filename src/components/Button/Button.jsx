export const Button = ({ children, type = 'click', className }) => {
  console.log(className);
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
