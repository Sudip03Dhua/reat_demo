
import './App.css';
// import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'reactstrap';

function App() {
  
    // const notify = () => toast.success("Wow so easy !",{
    //   position:'top-left'
    // });

  return (
    <div className="">
     {/* <Button onClick={notify} color='primary'>Hello</Button>
     <ToastContainer/> */}

        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
    
    </div>
  );
}

export default App;
