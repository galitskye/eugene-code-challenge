import Input from '../Input';

const hasLength = (val: string) => {
  return val.length > 8;
};

const hasLowercase = (val: string) => {
  return /[a-z]/g.test(val);
};

const hasUppercase = (val: string) => {
  return /[A-Z]/g.test(val);
};

const hasNumber = (val: string) => {
  return /[0-9]/g.test(val);
};

const hasSpecialCharacter = (val: string) => {
  return /[!@#$%^&*()_,.?":{}|<>]/g.test(val);
};

const Password = () => {
  return (
    <Input
      name="password"
      type="password"
      label="Password"
      validations={[
        [hasLength, '8+ characters'],
        [hasLowercase, 'lowercase letter'],
        [hasUppercase, 'uppercase letter'],
        [hasNumber, 'number'],
        [hasSpecialCharacter, 'special character'],
      ]}
      required
    />
  );
};

export default Password;
