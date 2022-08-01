import React from "react";
import { useState, useEffect, useRef } from "react";
import { Button, ButtonGroup, Input } from "@mui/material";
import axios from "axios";
import "./Todos.css";

interface Todo {
  _id: string;
  username: string;
  todo: string;
  isDone: boolean;
  hasAttachment: boolean;
}
const Todos = (): JSX.Element => {
  // Getting Todos states
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<Todo>>([]);
  //   Add Todo states
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [toDo, setToDo] = useState<string>("");
  let [isDone, setIsDone] = useState<boolean>(false);
  const [hasAttachment, setHasAttachment] = useState<boolean>(false);
  //   Update Todo states
  let [isDoneUpdate, setIsDoneUpdate] = useState<boolean>(false);
  const [hasAttachmentUpdate, setHasAttachmentUpdate] =
    useState<boolean>(false);
  // Rerender state
  const [rerender, setRerender] = useState<boolean>(false);
  //   show ID Button states
  let [showDivId, setShowId] = useState<string>("hiddenId");
  let [showDivIdText, setShowDivIdText] = useState<string>("Show To Do ID");
  // show Update To Do Form
  let [showUpdateToDo, setshowUpdateToDo] = useState<string>(
    "updateToDoForm-hidden"
  );
  // Refs
  const addToDoForm = useRef<HTMLFormElement>(null);
  const updateToDoForm = useRef<HTMLFormElement>(null);
  const checkbox1 = useRef<HTMLInputElement>(null);
  const checkbox2 = useRef<HTMLInputElement>(null);
  const checkbox3 = useRef<HTMLInputElement>(null);
  const checkbox4 = useRef<HTMLInputElement>(null);
  //   getting existing Todos
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:3000/api/todos"
        );
        setData(response);
      } catch (error: unknown) {
        if (typeof error === "string") {
          console.error(error.toUpperCase());
        } else if (error instanceof Error) {
          console.error(error.message);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [rerender]);
  //   Adding a To Do
  const handleSubmitAdd = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent page refresh
    axios
      .post("http://localhost:3000/api/todo", {
        username: name,
        todo: toDo,
        isDone: isDone,
        hasAttachment: hasAttachment,
      })
      .then((res) => {
        setRerender(!rerender);
        addToDoForm.current?.reset();
        console.log(res);
        console.log(res.data);
      });
  };
  //   Updating a To Do
  const handleSubmitUpdate = (
    event: React.SyntheticEvent<HTMLFormElement>,
    _id: string
  ) => {
    event?.preventDefault(); // prevent page refresh
    setIsDoneUpdate(false);
    setHasAttachmentUpdate(false);

    axios
      .post("http://localhost:3000/api/todo", {
        _id: _id,
        username: name,
        todo: toDo,
        isDone: isDoneUpdate,
        hasAttachment: hasAttachmentUpdate,
      })
      .then((res) => {
        setRerender(!rerender);
        updateToDoForm.current?.reset();
        console.log(res);
        console.log(res.data);
      });
  };
  // update updateCheckboxes state
  const clickCheckBoxUpdate = () => {
    if (checkbox3.current!.checked === true) {
      setIsDoneUpdate(true);
    } else {
      setIsDoneUpdate(false);
    }
    if (checkbox4.current!.checked === true) {
      setHasAttachmentUpdate(true);
    } else {
      setHasAttachmentUpdate(false);
    }
  };
  // update addCheckboxes state
  const clickCheckboxAdd = () => {
    if (checkbox1.current!.checked === true) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
    if (checkbox2.current!.checked === true) {
      setHasAttachment(true);
    } else {
      setHasAttachment(false);
    }
  };
  //  Deleting a To Do
  const removeUser = async (_id: string) => {
    try {
      const res = await axios.delete("http://localhost:3000/api/todo", {
        data: { id: _id },
      });
      setRerender(!rerender);
      console.log(res);
    } catch (error: unknown) {
      if (typeof error === "string") {
        console.error(error.toUpperCase());
      } else if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  // Show ID button functionality
  const showId = () => {
    if (showDivId === "show-id") {
      setShowId("hiddenId");
      setShowDivIdText("Show To Do ID");
      console.log(showDivId);
    } else if (showDivId === "hiddenId") {
      setShowId("show-id");
      setShowDivIdText("Hide To Do ID");
      console.log(showDivId);
    }
  };
  // Update To Do button functionality
  const showUpdateToDoForm = (id: string) => {
    setshowUpdateToDo(id);
    if (showUpdateToDo === id) {
      setshowUpdateToDo("updateToDoForm-hidden");
    } else if (showUpdateToDo === "updateToDoForm-hidden") {
      setshowUpdateToDo(id);
    }
  };

  return (
    <>
      <div id="contents">
        <h1>Todos</h1>
        {loading && <div>Loading</div>}
        {!loading && (
          <ul id="todos">
            {data.length === 0
              ? "There are no to do's added. Please add a new to do."
              : data.map((item, index) => (
                  <li key={item._id}>
                    <span id="thick-text">Username</span>
                    {` ${item.username} `}
                    <span id="thick-text">Todo</span>
                    {` ${item.todo} `}
                    <span id="thick-text">Is it done?</span>
                    {` ${item.isDone.toString()} `}
                    <span id="thick-text"> Has any attachments?</span>
                    {` ${item.hasAttachment.toString()} `}
                    <span
                      id="thick-text"
                      className={showDivId}
                      style={{ color: "purple" }}
                    >{`ID ${item._id.toString()} `}</span>

                    <ButtonGroup>
                      <Button
                        variant="contained"
                        onClick={() => removeUser(item._id)}
                        color="error"
                        size="small"
                      >
                        Delete
                      </Button>

                      <Button
                        variant="contained"
                        onClick={() => showUpdateToDoForm(item._id)}
                        color="primary"
                        size="small"
                      >
                        Update To Do
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => showId()}
                        color="secondary"
                        size="small"
                      >
                        {showDivIdText}
                      </Button>
                    </ButtonGroup>

                    {showUpdateToDo === item._id && (
                      <form
                        onSubmit={(e) => handleSubmitUpdate(e, item._id)}
                        id="updateToDoForm"
                        className={showUpdateToDo}
                        ref={updateToDoForm}
                      >
                        <label>
                          To Do:
                          <input
                            type="text"
                            name="name"
                            onChange={(event) => setToDo(event.target.value)}
                          />
                        </label>
                        <label htmlFor="isDoneUpdate">
                          Is done?
                          <input
                            ref={checkbox3}
                            type="checkbox"
                            id="isDoneUpdate"
                            name="isDoneUpdate"
                            onClick={clickCheckBoxUpdate}
                          ></input>
                        </label>
                        <label htmlFor="hasAttachmentUpdate">
                          Has Attachment?
                          <input
                            ref={checkbox4}
                            type="checkbox"
                            id="hasAttachmentUpdate"
                            name="hasAttachmentUpdate"
                            onClick={clickCheckBoxUpdate}
                          ></input>
                        </label>
                        <Button
                          variant="contained"
                          type="submit"
                          color="success"
                          size="small"
                        >
                          Submit
                        </Button>
                      </form>
                    )}
                  </li>
                ))}
          </ul>
        )}

        <form onSubmit={handleSubmitAdd} id="addForm" ref={addToDoForm}>
          <h3>Add a To Do Item</h3>

          <label>
            To Do:
            <input
              type="text"
              name="name"
              onChange={(event) => setToDo(event.target.value)}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label htmlFor="isDone">
            Is done?
            <input
              ref={checkbox1}
              type="checkbox"
              id="isDone"
              name="isDone"
              onClick={clickCheckboxAdd}
            ></input>
          </label>
          <label htmlFor="hasAttachment">
            Has Attachment?
            <input
              ref={checkbox2}
              type="checkbox"
              id="hasAttachment"
              name="hasAttachment"
              onClick={clickCheckboxAdd}
            ></input>
          </label>
          <Button
            variant="contained"
            type="submit"
            color="success"
            size="small"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Todos;
