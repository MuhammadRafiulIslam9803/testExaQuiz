
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Static from './Components/Static/Static';
import About from './Components/About/About';
import Contst from './Components/Contest/Contst';
import Redy from './Components/Redy/Redy';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[

        {path : '/' , element:<Redy></Redy>},
        {path : '/home' ,
        loader: () =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        } ,
          
        element:<Home></Home>},
        {path : '/static' , element:<Static></Static>},
        {path : '/about' , element:<About></About>},
        {path:'/home/:id',
         loader: async({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
         },
         element :<Contst></Contst>
      
      
       }

      ]
    },
    // {path : '*' , element: <div>not found bro</div> }
  ])
  return (
    <div className="App">
       <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
