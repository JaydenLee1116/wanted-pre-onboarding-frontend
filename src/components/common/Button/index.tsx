import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({ onClick, disabled = false, children, ...props }: ButtonProps) => {
  const disabledStyle = disabled ? 'bg-gray-300' : 'bg-blue-300 hover:bg-blue-400';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl border p-2 ${disabledStyle}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
