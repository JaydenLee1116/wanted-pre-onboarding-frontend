import { HTMLAttributes, ReactNode, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: ReactNode;
}
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  value: string;
}
interface BottomTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const Input = ({ children }: InputProps) => {
  return <div className="mb-6 flex h-fit w-full flex-col items-center justify-between">{children}</div>;
};
const Label = ({ htmlFor, children, ...props }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} {...props} className="p-4 font-bold">
      {children}
    </label>
  );
};
const TextField = ({ id, type, value, ...props }: TextFieldProps) => {
  return <input id={id} type={type} value={value} {...props} className="border border-blue-300" />;
};
const BottomText = ({ children, ...props }: BottomTextProps) => {
  return <p {...props}>{children}</p>;
};

Input.Label = Label;
Input.TextField = TextField;
Input.BottomText = BottomText;

export default Input;
