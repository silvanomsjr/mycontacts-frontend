import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

// import Modal from '../../components/Modal';
// import Loader from '../../components/Loader';

import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import thrash from '../../assets/icons/thrash.svg';

function Home() {
  return (
    <Container>
      {/* <Loader />
      <Modal danger /> */}
      <InputSearchContainer>
        <input type="text" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Silvano Junior</strong>
              <small>Instagram</small>
            </div>
            <span>silvano@devacademy.com.br</span>
            <span>(34) 9 9941-8527</span>
          </div>
          <div className="icons">
            <Link to="/edit/1234"><img src={edit} alt="Editar contato" /></Link>
            <img src={thrash} alt="Deletar contato" />
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Silvano Junior</strong>
              <small>Instagram</small>
            </div>
            <span>silvano@devacademy.com.br</span>
            <span>(34) 9 9941-8527</span>
          </div>
          <div className="icons">
            <a href="/"><img src={edit} alt="Editar contato" /></a>
            <img src={thrash} alt="Deletar contato" />
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Silvano Junior</strong>
              <small>Instagram</small>
            </div>
            <span>silvano@devacademy.com.br</span>
            <span>(34) 9 9941-8527</span>
          </div>
          <div className="icons">
            <a href="/"><img src={edit} alt="Editar contato" /></a>
            <img src={thrash} alt="Deletar contato" />
          </div>
        </Card>

      </ListContainer>

    </Container>
  );
}

export default Home;
