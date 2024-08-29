import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
  message: string;
}

export const GenerateError = ({ message }: ToastProps) => {
  toast.error(message, {
    position: 'top-right',
    theme: 'colored',
    autoClose: 1000
  });
};


export const GenerateSuccess = ({ message }: ToastProps) => {
  toast.success(message, {
    position: 'top-right',
    theme: 'colored',
    autoClose: 1000
  });
};
