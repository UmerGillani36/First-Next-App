'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Client = () => {
  const pathname = usePathname();
  const client = [
    { id: 'umer', name: 'Umer' },
    { id: 'hamza', name: 'Hamza' },
  ];
  console.log('pathName', pathname);
  return (
    <div>
      <h1>client</h1>
      <ul>
        {client.map((val) => {
          const isActive = pathname.startsWith(val.id);
          return (
            <li key={val.id} style={{ color: isActive ? 'blue' : 'black' }}>
              <Link
                className={isActive ? 'text-blue' : 'text-black'}
                href={`/client/${val.id}`}
                key={val.id}
              >
                {val.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Client;
