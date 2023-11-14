import { io } from "socket.io-client";

const options = { autoConnect: false, withCredentials: true, }

export default io('', options);