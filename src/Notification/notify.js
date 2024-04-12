import { toast } from "react-toastify";

export const showToastMessage = (message, type) => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
    onClose: () => {}, // Function to execute when the toast is closed
  });
};
