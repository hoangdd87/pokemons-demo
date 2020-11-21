import React, { useEffect, useState } from 'react';
import TodoForm from '../../shared/components/TodoForm/TodoForm';
import { useParams } from "react-router-dom";
import axios from 'axios';

const initialValues = {
  title: '',
  completed: false
}

const EditTodoPageConnector = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    key: 0,
    initialValues
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let didCancel = false;
    axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/todos/${id}`
    }).then(response => {
      if(!didCancel) {
        setForm(currentForm => ({
            initialValues: response.data,
            key: currentForm.initialValues + 1
          }));
        setIsLoading(false);
      }
    }).catch(err => {
      console.error(err);
      if(!didCancel) {
        setIsLoading(false);
      }
    })
    return () => { didCancel = true; }
  }, [id])
  return (
    <TodoForm
      initialValues={ form.initialValues }
      key = { form.key }
      onSubmit={ values => console.log('edit values = ', values) }
      title="Edit todo"
      isLoading={ isLoading }
      
    >
    </TodoForm>
  );
};

export default EditTodoPageConnector;
