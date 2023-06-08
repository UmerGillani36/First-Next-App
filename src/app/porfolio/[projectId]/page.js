'use client';

import { usePathname, useParams } from 'next/navigation';
const PorfolioProjectPage = () => {
  const router = usePathname();
  const id = useParams(); // replaced by router.query
  console.log('path Name', router);
  console.log('id', id);
  return <div>Porfolio Project Page</div>;
};

export default PorfolioProjectPage;
