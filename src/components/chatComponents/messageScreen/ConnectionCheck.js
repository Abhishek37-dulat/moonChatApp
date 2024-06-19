import React, { useEffect, useState } from "react";
import io from "socket.io-client";

function ConnectionCheck() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8001"); // Replace with your server URL
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  // Additional useEffect to handle socket connection status
  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("Connected");
        // Handle connection logic if needed
      });

      socket.on("disconnect", () => {
        console.log("Disconnected");
        // Handle disconnection logic if needed
      });

      socket.on("connect_error", (error) => {
        console.error("Connection error:", error);
        // Handle connection error logic if needed
      });
    }
  }, [socket]);

  return <div>{/* Your component JSX */}</div>;
}

export default ConnectionCheck;
