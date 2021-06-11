import './App.scss';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div> 
      <Navbar/>
      <Aside/>
      <Main/>
    </div>
  );
}

export default App;