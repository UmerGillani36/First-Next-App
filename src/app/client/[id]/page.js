'use client';
import { useRouter } from 'next/navigation';
const ClientProjectPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Aliyan Project Page</h1>
      <button onClick={() => router.push('/client/umer/aliyan')}>
        Load Project A
      </button>
    </div>
  );
};

export default ClientProjectPage;
