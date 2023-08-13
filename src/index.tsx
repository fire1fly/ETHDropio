import { render } from 'react-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import './app/styles/index.scss';

import 'shared/config/i18n/i18n';

import { App } from './app/App';

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
);
