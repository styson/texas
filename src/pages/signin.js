import './App.css';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function SignIn() {
  return (
    <div>
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignIn />
        <AmplifySignUp />
      </AmplifyAuthenticator>
    </div>
  );
}
export default SignIn;
