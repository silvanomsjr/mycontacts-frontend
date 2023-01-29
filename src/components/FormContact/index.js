import PropTypes from 'prop-types';

import FormGroup from '../FormGroup';
import { CustomButton } from '../CustomButton';
import { CustomSelect } from '../CustomSelect';
import { CustomInput } from '../CustomInput';
import { Form, ButtonContainer } from './styles';

export default function FormContact({ btnText }) {
  return (
    <Form>
      <FormGroup>
        <CustomInput placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <CustomInput placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <CustomInput placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <CustomSelect>
          <option value="123">Instagram</option>
        </CustomSelect>
      </FormGroup>

      <ButtonContainer>
        <CustomButton type="button">
          {btnText}
        </CustomButton>
      </ButtonContainer>

    </Form>
  );
}

FormContact.propTypes = {
  btnText: PropTypes.string.isRequired,
};
