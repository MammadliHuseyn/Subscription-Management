import './App.scss';
import Aside from './components/Aside/Aside';
import {Login} from './components/Login/Login';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div> 
      {/* <Navbar/>
      <Aside/>
      <Main/> */}
      <Login/>
    </div>
  );
}

export default App;