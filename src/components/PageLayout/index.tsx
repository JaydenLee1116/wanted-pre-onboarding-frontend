import { HTMLAttributes, ReactNode } from 'react';

interface PageLayoutProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <section className="flex h-96 w-full flex-col items-center justify-between">{children}</section>;
};

export default PageLayout;
