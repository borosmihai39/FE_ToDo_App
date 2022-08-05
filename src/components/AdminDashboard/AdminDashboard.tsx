import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import "./AdminDashboard.css";
import axios from "axios";
interface Message {
  email: string;
  message: string;
}
const AdminDashboard = () => {
  let [message, setMessage] = useState<Array<Message>>();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:3000/api/contactmessage"
        );
        setMessage(response);
        console.log(response);
      } catch (error: unknown) {
        if (typeof error === "string") {
          console.error(error.toUpperCase());
        } else if (error instanceof Error) {
          console.error(error);
        }
      }
    };
    getPosts();
  }, []);
  return (
    <div id="admin-wrapper">
      {message ? (
        message.map((item) => {
          return (
            <div id="messages">
              <h4>{`Email: ${item.email}`}</h4>
              <Typography>{`Message: ${item.message}`}</Typography>
            </div>
          );
        })
      ) : (
        <h2>There are no messages.</h2>
      )}
    </div>
  );
};

export default AdminDashboard;
