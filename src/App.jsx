import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import MainContainer from './MainContainer';
import Calendar from './components/popups/Calendar';
import useMain from './useMain';
import Loading from './components/loading/Loading';
import MainPopUp from './components/popups/MainPopUp';
import Orders from './components/popups/Orders';
import Notes from './components/popups/Notes';
import Categories from './components/popups/Categories';
import AddProductModal from './modal/add-product/AddProductModal';
import SignIn from './pages/sing_in/SignIn';


const App = () => {

  const main = useMain()

  return (  
    <>
      {main.load ? 
        <>
          {main.auth 
          ?<div className='main_wrapper'>

              <Router>
                
                <Dashboard />

                <MainContainer user={main.user} />

              </Router>

              {/*---- Всплывающие окна -----*/}
              <Calendar />
              <MainPopUp />
              <Orders />
              <Notes />
              <Categories />
              <AddProductModal />

            </div>
          :<SignIn />}
        </>
      :
        <div className="main_loading">
          <Loading />
        </div>
      }
    </>
  );
};

export default App;