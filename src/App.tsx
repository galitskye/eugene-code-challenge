import Header from './components/Header';
import RegistrationForm from './components/registration/RegistrationForm';

function App() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center grow p-4">
        <RegistrationForm />
      </main>
    </>
  );
}

export default App;
