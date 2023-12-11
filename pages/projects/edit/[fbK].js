import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleProject } from '../../../api/projectData';
import NewProjectForm from '../../../components/forms/NewProjectForm';

export default function EditMember() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { fbK } = router.query;

  useEffect(() => {
    getSingleProject(fbK).then(setEditItem);
  }, [fbK]);

  return (<NewProjectForm obj={editItem} />);
}
