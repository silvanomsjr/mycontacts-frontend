import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import FormContact from '../../components/FormContact';

export default function EditContact() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <PageHeader title="Editar Silvano Junior" />
      <FormContact btnText="Salvar alterações" />
    </div>
  );
}
