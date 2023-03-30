import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Overlay, Container, Footer } from './styles';
import { CustomButton } from '../CustomButton';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo do modal</h1>
        <p>Corpo do modal</p>
        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <CustomButton type="button" danger={danger}>
            Deletar
          </CustomButton>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
