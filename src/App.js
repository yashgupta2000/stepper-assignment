import './App.css';
import AddOns from './components/AddOns';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import Summary from './components/Summary';
import Wrapper from './pages/Wrapper';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


function App() {

  const appRouter = createBrowserRouter([{
    path: '/', element: <Wrapper />, children: [
      { index: true, element: <PersonalInfo /> },
      { path: 'select-plan', element: <SelectPlan /> },
      { path: 'add-ons', element: <AddOns /> },
      { path: 'summary', element: <Summary /> }
    ]
  }])
  return (
    <Provider store={appStore}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
