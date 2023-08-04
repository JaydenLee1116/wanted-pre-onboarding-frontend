import { HTMLAttributes, ReactNode } from 'react';

interface TitleProps extends HTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};

export default Title;
