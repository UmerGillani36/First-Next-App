'use client';
import { useParams } from 'next/navigation';
const SelectedClientProject = () => {
  const id = useParams();
  console.log('id', id);
  return <div>selected client Project Page</div>;
};

export default SelectedClientProject;
