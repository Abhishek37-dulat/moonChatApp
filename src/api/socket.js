import io from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

class SocketService {
  socket;
  connect() {
    if (!this.socket) {
      this.socket = io(SOCKET_URL, {
        transports: ["websocket"],
      });
      this.socket.on("connect", () => {
        console.log("connected to the socket server");
      });
      this.socket.on("disconnect", () => {
        console.log("disconnect from the socket server");
      });
      this.socket.on("connect_error", (error) => {
        console.log("Connection error: ", error);
      });
    }
  }
  disconnect() {
    console.log(this.socket);
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
  emit(event, data) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }
  on(event, callback) {
    console.log("event:: ", event, "callback:: ", callback);
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }
  off(event, callback) {
    if (this.socket) {
      this.socket.off(event, callback);
    }
  }
}

const socketService = new SocketService();
export default socketService;
