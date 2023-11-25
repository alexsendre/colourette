import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSinglePalette } from '../../../api/paletteData';
import NewPaletteForm from '../../../components/forms/NewPaletteForm';

function EditPalette() {
  const [editPalette, setEditPalette] = useState({});
  const router = useRouter();
  const { fbK } = router.query;

  useEffect(() => {
    getSinglePalette(fbK).then(setEditPalette);
  }, [fbK]);

  return (<NewPaletteForm obj={editPalette} />);
}

export default EditPalette;
