import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const createErrors = ({ field, message }) => {
    if (errors.find((error) => error.field === field)) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  };

  const removeErrors = (field) => {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== field,
    ));
  };

  const getErrorMessageByFieldName = (field) => (
    errors.find((error) => error.field === field)?.message
  );

  return {
    errors,
    createErrors,
    removeErrors,
    getErrorMessageByFieldName,
  };
}
