import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const notify = () => toast.success("LOGIN SUCCESFULLY..!!",{
        position:"top-center"
    });

    return (
      <div>
        <button onClick={notify}>SUBMIT!</button>
        <ToastContainer />
      </div>
  )
}

export default Toastify
