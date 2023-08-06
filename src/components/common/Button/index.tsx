import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({ onClick, disabled = false, children, ...props }: ButtonProps) => {
  const disabledStyle = disabled
    ? 'border-gray-500 hover:border-red-500 opacity-50 '
    : 'border-blue-500 hover:border-green-500';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl border-2 p-2 ${disabledStyle}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
