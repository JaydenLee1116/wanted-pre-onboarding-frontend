import { HTMLAttributes, ReactNode, InputHTMLAttributes, LabelHTMLAttributes, ChangeEvent } from 'react';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'small' | 'full';
}
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: ReactNode;
}
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
interface BottomTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const Input = ({ children, size = 'full' }: InputProps) => {
  const sizeClass = size === 'small' ? 'w-36' : 'w-full';

  return (
    <div className={`relative flex h-fit ${sizeClass} flex-col items-center justify-between`}>{children}</div>
  );
};
const Label = ({ htmlFor, children, ...props }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className="p-4 font-bold" {...props}>
      {children}
    </label>
  );
};
const TextField = ({ id, type, value, onChange, ...props }: TextFieldProps) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border-2 border-blue-500 p-1"
      {...props}
    />
  );
};
const BottomText = ({ children, ...props }: BottomTextProps) => {
  return (
    <p className="absolute top-24 cursor-default select-none text-sm text-red-500" {...props}>
      {children}
    </p>
  );
};

Input.Label = Label;
Input.TextField = TextField;
Input.BottomText = BottomText;

export default Input;
