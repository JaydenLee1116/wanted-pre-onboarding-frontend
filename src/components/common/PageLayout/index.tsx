import { HTMLAttributes, ReactNode } from 'react';

interface PageLayoutProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-y-4 py-10">
      {children}
    </section>
  );
};

export default PageLayout;
