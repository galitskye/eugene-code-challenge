import { SyntheticEvent, useState } from 'react';

type InputProps = {
  name: string;
  type?: 'text' | 'password' | 'email';
  label?: string;
  validations?: [(v: string) => boolean, string][];
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
};

type InputState = {
  value: string;
  validation: [boolean, string][];
};

const validate = (
  validations: [(v: string) => boolean, string][] = [],
  value: string
) =>
  validations.map(
    ([validate, message]) => [validate(value), message] as [boolean, string]
  );

const Input = ({
  type,
  label,
  name,
  placeholder,
  defaultValue = '',
  required = false,
  validations = [],
}: InputProps) => {
  const [state, setState] = useState<InputState>({
    value: defaultValue,
    validation: validate(validations, defaultValue),
  });

  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const value = input.value;
    const validation = validate(validations, value);
    const isValid = !validation.some(([isValid]) => !isValid);

    input.setCustomValidity(isValid ? '' : 'Has errors!');

    setState({
      value,
      validation,
    });
  };

  return (
    <>
      <label className="block">
        {label && <span className="block mb-4">{label}</span>}

        <input
          name={name}
          className="w-full main-border text-lg px-4 py-2.5 outline-0"
          type={type ?? 'text'}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          tabIndex={1}
        />
      </label>

      {state.validation.length < 1 ? null : (
        <ul className="mt-4">
          {state.validation.map(([isValid, message], index) => (
            <li key={`${message}_${index}`}>
              <span className={`${isValid ? 'text-green' : 'text-red'}`}>
                {isValid ? '✔︎' : '✘'}
              </span>{' '}
              {message}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Input;
