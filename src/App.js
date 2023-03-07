
import './App.css';
import Navbar from './component/navigation';
import Main from './component/resume';
import Acedemic from './component/qualification';
import Contact from './component/contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Acedemic/>
      <Contact/>
    </div>
  );
}

export default App;
