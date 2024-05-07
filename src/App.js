import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Activities from './pages/Activities/Activities';
import Packages from './pages/Packages/Packages';
function App() {

  const route=createBrowserRouter([
{
  path:'/',
  element:(
    <Home/>
  )
  
},
{
  path:'/activities',
  element:(
  <Activities/>
  )
},
{
  path:'/package',
  element:(
  <Packages/>
  )
}
  ])
  return (
    <div className="App">
     
     <RouterProvider router={route}/>
    </div>
  );
}

export default App;
