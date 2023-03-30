import FormContact from '../../components/FormContact';
import PageHeader from '../../components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <FormContact btnText="Cadastrar" />
    </>
  );
}
