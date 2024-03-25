import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { LoaderFunctionArgs, RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { SignIn } from './pages/signin';
import { Tournament } from './pages/tournament';
import { GameDays } from './pages/gamedays';
import { getCurrentUser } from 'aws-amplify/auth';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: Home,
    children: [
      {
        path: 'game-days',
        Component: GameDays,
      },
      {
        path: 'tournament',
        Component: Tournament,
      },
      {
        path: 'sign-in',
        Component: SignIn,
        async action() {
          return redirect('/');
        },
      },
      {
        path: 'profile',
        loader: protectedLoader,
        Component: Profile,
      },
      {
        path: '/sign-out',
        async action() {
          return redirect('/');
        },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
}

async function protectedLoader({ request }: LoaderFunctionArgs) {
  // // If the user is not logged in and tries to access `/protected`, we redirect
  // // them to `/login` with a `from` parameter that allows login to redirect back
  // // to this page upon successful authentication
  // if (status.authStatus !== 'authenticated') {
  //   let params = new URLSearchParams();
  //   params.set('from', new URL(request.url).pathname);
  //   return redirect('/sign-in?' + params.toString());
  // }
  // return null;
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(username, userId, signInDetails);
    let params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/sign-in?' + params.toString());
  } catch (err) {
    console.log(err);
    return null;
  }
}
