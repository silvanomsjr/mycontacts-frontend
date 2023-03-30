import { useState } from 'react';
import PropTypes from 'prop-types';

import useErrors from '../../hooks/useErrors';

import isEmailValid from '../../utils/ValidateEmail';
import FormGroup from '../FormGroup';
import { CustomButton } from '../CustomButton';
import { CustomSelect } from '../CustomSelect';
import { CustomInput } from '../CustomInput';
import { Form, ButtonContainer } from './styles';
import formatPhone from '../../utils/FormatPhone';

export default function FormContact({ btnText }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const {
    errors,
    createErrors,
    removeErrors,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!event.target.value) {
      createErrors({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeErrors('name');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value && !isEmailValid(event.target.value)) {
      createErrors({ field: 'email', message: 'Email é inválido.' });
    } else {
      removeErrors('email');
    }
  };

  const handlePhoneChange = (event) => {
    setPhone(formatPhone(event.target.value));
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({
    //   email, name, phone, category,
    // });
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <CustomInput
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup
        error={getErrorMessageByFieldName('email')}
      >
        <CustomInput
          type="email"
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <CustomInput
          maxLength="15"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>

      <FormGroup>
        <CustomSelect
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Categoria</option>
          <option value="123">Instagram</option>
          <option value="1234">Facebook</option>
          <option value="12345">Twitter</option>
        </CustomSelect>
      </FormGroup>

      <ButtonContainer>
        <CustomButton disabled={!isFormValid}>
          {btnText}
        </CustomButton>
      </ButtonContainer>

    </Form>
  );
}

FormContact.propTypes = {
  btnText: PropTypes.string.isRequired,
};
