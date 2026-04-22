export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center p-4">
      <span className="text-xs antialiased">
        &copy; {new Date().getFullYear()} Teslo Shop. All rights reserved.
      </span>
    </footer>
  );
};
