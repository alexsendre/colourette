import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <p>Click the button below to begin!</p>
      <Button variant="primary" type="button" size="lg" className="copy-btn" onClick={() => router.push('/generate')}>
        GENERATE
      </Button>
    </div>
  );
}

export default Home;
