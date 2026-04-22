interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};

export default AuthLayout;
