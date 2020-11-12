import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './TodoForm.css';

const validateTitle = value => {
  if (!value) return 'This field is required'
};

const TodoForm = ({ initialValues, onSubmit, isLoading, title }) => {
  const [values, setValues] = useState(initialValues);
  
  const handleOnChange = evt => {
    const target = evt.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setValues({
      ...values,
      [name]: value
    });
  }
  
  const titleError = useMemo(() => validateTitle(values.title), [values.title]);
  
  return isLoading ? 'Loading' : (
    <form
        className="container"
        onSubmit={ (evt) => {
          evt.preventDefault();
          onSubmit(values);
        } }
      >
      <h4>{ title }</h4>
      <input
          required
          placeholder="title"
          type="text"
          value={ values.title }
          name="title"
          onChange={ handleOnChange }
        />
        <label>
          <input
            type="checkbox"
            value={ values.completed }
            onChange={ handleOnChange }
            name="completed"
          />
          Completed
        </label>
        <button
          type="submit"
          disabled={ titleError }
        >
          Submit
        </button>
      </form>
  )
};

TodoForm.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
};

export default TodoForm;
