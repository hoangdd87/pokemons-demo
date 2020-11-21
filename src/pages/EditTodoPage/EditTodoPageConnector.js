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
  const [todo, setTodo] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let didCancel = false;
    axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/todos/${id}`
    }).then(response => {
      if(!didCancel) {
        setTodo(response.data);
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
      initialValues={ todo }
      key = { isLoading }
      onSubmit={ values => console.log('values = ', values) }
      title="Edit todo"
      isLoading={ isLoading }
      
    >
    </TodoForm>
  );
};

export default EditTodoPageConnector;
