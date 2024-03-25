import './index.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import config from './aws-exports';

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Authenticator.Provider>
    <App />
  </Authenticator.Provider>,
);
