import { TextareaAutosize, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./ContactInput.css";
import axios from "axios";
const ContactInput = () => {
  let [message, setMessage] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [infoMessage, setInfoMessage] = useState<string>("");
  const submitMessage = () => {
    if (message.length === 0 || email.length === 0) {
      setInfoMessage("Fields cannot be empty!");
    } else {
      const newMessageSave = {
        message: message,
        email: email,
      };

      const sendMessage = async () => {
        try {
          const resp = await axios.post(
            "http://localhost:3000/api/contactmessage",
            newMessageSave
          );
          if (resp.status === 200) {
            setInfoMessage("Sucessfully sent!");
          } else {
            return null;
          }
        } catch (err) {
          // Handle Error Here
          setInfoMessage("Failed to send message");
          console.error(err);
        }
      };

      sendMessage();
      setInfoMessage("Message sent successfully!");
      console.log(email, message);
    }
  };
  return (
    <div id="contact-wrapper">
      <h2>Please send us your message!</h2>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Type your message here!"
        style={{ width: 500 }}
        minRows={10}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />

      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        required
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      {infoMessage === "Fields cannot be empty!" ? (
        <div style={{ color: "red" }}>{infoMessage}</div>
      ) : (
        <div style={{ color: "green" }}>{infoMessage}</div>
      )}
      <Button
        color="success"
        variant="contained"
        sx={{ marginTop: 2 }}
        onClick={() => {
          submitMessage();
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default ContactInput;
