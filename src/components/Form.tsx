import { PropsWithChildren, SyntheticEvent, useState } from 'react';

type FormProps = {
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
  className?: string;
} & PropsWithChildren;

const Form = ({ children, onSubmit: onFormSubmit, className }: FormProps) => {
  const [state, setState] = useState(Math.random);
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    onFormSubmit?.(
      Object.fromEntries([...new FormData(e.currentTarget as HTMLFormElement)])
    );

    setState(Math.random());
  };

  return (
    <form className={className} onSubmit={onSubmit} key={state}>
      {children}
    </form>
  );
};

export default Form;
