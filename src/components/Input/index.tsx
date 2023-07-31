import { HTMLAttributes, ReactNode, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}
interface BottomTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const Input = ({ children }: InputProps) => {
  return <div className="w-full h-fit mb-6 flex flex-col justify-between items-center">{children}</div>;
};
const Label = ({ children, htmlFor, ...props }: LabelProps) => {
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
