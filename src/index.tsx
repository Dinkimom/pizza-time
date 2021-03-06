import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app/app';
import { MenuClient } from './services/MenuClient';
import { OrderClient } from './services/OrderClient';
import { UserClient } from './services/UserClient';
import { configureStore } from './store/store';
import './styles/index.css';

export const menuClient = new MenuClient();
export const userClient = new UserClient();
export const orderClient = new OrderClient();

export const store = configureStore();
const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
