import { PropsWithChildren } from 'react';

const Button = ({ children }: PropsWithChildren) => {
  return (
    <button
      className="block w-full text-white bg-black p-4 lg:hover:opacity-70"
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
