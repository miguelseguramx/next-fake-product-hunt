import React, { useState, useEffect } from 'react';

const useForm = (initialState, validationRules, functionToExecute) => {
  const [ values, setValues ] = useState(initialState);
  const [ errors, setErrors ] = useState({});
  const [ submitForm, setSubmitForm ] = useState(false)

  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        functionToExecute()
      }
      setSubmitForm(false)
    }
  }, [submitForm])

  // Function to execute while the user is typing
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errorValidation = validationRules(values)
    setErrors(errorValidation)
    setSubmitForm(true)
  }

  const handleBlur = () => {
    const errorValidation = validationRules(values)
    setErrors(errorValidation)
  }

  return {
    values,
    errors,
    handleSubmit, 
    handleChange,
    handleBlur
  };
};

export default useForm;