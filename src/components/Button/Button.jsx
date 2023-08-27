export const Button = ({ children, type = 'click', className }) => {
  // Компонент кнопка, для зміни типу кнопки передаємо проп type="value"-string
  // якщо необхідно стилізувати кнопку, передаем компоненту <Button className={your style }></Button>

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
