import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';

import Home from './components/Home/Home';
import Quizdetails from './components/Quizdetails/Quizdetails';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Home></Home>
      },
      {
        path: "/",
        loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Topics></Topics>
      },
      {
        path: "/quiz/:quizId",
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
        },
        element: <Quizdetails></Quizdetails>

      },
      {
        path: "statistics",
        loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Statistics></Statistics>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },






    ]

  },
  {
    path: "*", element: <div>This route not found!!!!</div>
  }





]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>



    </div>
  );
}

export default App;
