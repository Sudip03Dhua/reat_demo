import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'reactstrap';

function App() {
  
    const notify = () => toast("Wow so easy !");

  return (
    <div className="App">
     <Button onClick={notify} color='primary'>Hello</Button>
     <ToastContainer/>
    </div>
  );
}

export default App;
