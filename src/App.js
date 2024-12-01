import './App.css';
import AddOns from './components/AddOns';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import Summary from './components/Summary';
import Wrapper from './pages/Wrapper';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

function App() {

  const appRouter = createBrowserRouter([{path:'/', element:<Wrapper/>, children:[
    {index:true, element:<PersonalInfo/>},
    {path:'select-plan', element:<SelectPlan/>},
    {path:'add-ons', element:<AddOns/>},
    {path:'summary', element:<Summary/>}
  ]}]) 
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
