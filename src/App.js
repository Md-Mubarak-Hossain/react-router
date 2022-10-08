import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import Main from './components/Layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';
import ShowDetails from './components/ShowDetails/ShowDetails';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        {
          path: 'friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        { path: 'products', element: <Products></Products> },
        {
          path: 'posts',
          element: <Posts></Posts>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          }
        },
        {
          path: '/post/:postId',
          element: <ShowDetails></ShowDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          }
        }
      ]
    },
    { path: 'about', element: <About></About> },
    { path: '*', element: <div>This page is not available now.</div> }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
