import React from 'react';
const routes = [
  {
    path: '/',
    component: React.lazy(() => import('./pages/PokemonsPage/PokemonsPageConnector')),
    exact: true
  },
  {
    path: '/todos',
    component: React.lazy(() => import('./pages/TodosPage/TodosPageConnector')),
    exact: true
  },
  {
    path: '/add-todo',
    component: React.lazy(() => import('./pages/AddTodoPage/AddTodoPage')),
    exact: true
  },
  {
    path: '/edit-todo/:id',
    component: React.lazy(() => import('./pages/EditTodoPage/EditTodoPageConnector')),
    exact: true
  }
]

export default routes;
