import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="body-container">
        <Home></Home>
        <Blog></Blog>
    </div>
  );
}

export default App;
