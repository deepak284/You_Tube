import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './component/Body';
import Head from './component/Head';
import MainContainer from "./component/MainContainer"
import WatchPage from './component/WatchPage';
import store from './utils/store'

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
        path:"/",
        element: <MainContainer/>,
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div>
        <Head/> 
      <RouterProvider router={appRouter}  />
    </div>
    </Provider>
  );
}

export default App;
