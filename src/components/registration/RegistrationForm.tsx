import Button from '../Button';
import Input from '../Input';
import Form from '../Form';
import Email from './Email';
import Password from './Password';

const RegistrationForm = () => {
  const onSubmit = (data: Record<string, unknown>) =>
    alert(JSON.stringify(data, null, 4));

  return (
    <Form
      className="flex flex-col md:flex-row px-4 py-8 gap-4 main-border w-full max-w-md md:max-w-[37.5rem]"
      onSubmit={onSubmit}
    >
      <div className="grow">
        <Email />
      </div>
      <div className="grow">
        <Password />

        <div className="mt-8">
          <Button>Submit</Button>
        </div>
      </div>
    </Form>
  );
};

export default RegistrationForm;
