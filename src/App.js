import {RouterProvider} from "react-router-dom";
import './App.scss'
import router from './routing/routing'
import {useSelector} from "react-redux";




function App() {


    const {filter,data,status} = useSelector((s)=>s.products)

  return (
    <div className="App">


   <RouterProvider router={router}/>
    </div>
  );
}

export default App;
