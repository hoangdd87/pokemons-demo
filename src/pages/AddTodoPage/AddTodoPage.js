import React from 'react';
import TodoForm from '../../shared/components/TodoForm/TodoForm';

const initialValues = {
  title: '',
  completed: false
}

const onSubmit = (values) => {
  console.log('values = ', values)
};

const AddTodoPage = () => {
  return (
    <TodoForm
      title="Add a todo"
      initialValues={ initialValues }
      onSubmit = { onSubmit }
      isLoading={ false }
    />
  );
};

AddTodoPage.propTypes = {

};

export default AddTodoPage;
