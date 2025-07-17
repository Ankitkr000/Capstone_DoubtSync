
import { io } from "socket.io-client";
const socket = io("https://capstone-doubtsync.onrender.com", {
  withCredentials: true,
});
export default socket;
