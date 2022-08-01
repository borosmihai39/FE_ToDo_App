import React from "react";
import { useState, useEffect, useRef } from "react";
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

  //   Adding a todo
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

  //   update ToDo
  const handleSubmitUpdate = (
    event: React.SyntheticEvent<HTMLFormElement>,
    _id: string
  ) => {
    event?.preventDefault(); // prevent page refresh
    const updateForm = document.getElementById(
      "updateForm"
    ) as HTMLFormElement | null;
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
        updateForm?.reset();
        console.log(res);
        console.log(res.data);
      });
  };

  //   checkbox state change function
  const clickCheckbox = () => {
    const checkBox1 = document.getElementById(
      "isDone"
    ) as HTMLInputElement | null;
    const checkBox2 = document.getElementById(
      "hasAttachment"
    ) as HTMLInputElement | null;
    const checkBox3 = document.getElementById(
      "isDoneUpdate"
    ) as HTMLInputElement | null;
    const checkBox4 = document.getElementById(
      "hasAttachmentUpdate"
    ) as HTMLInputElement | null;
    if (checkBox1!.checked === true) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
    if (checkBox2!.checked === true) {
      setHasAttachment(true);
    } else {
      setHasAttachment(false);
    }
    if (checkBox3!.checked === true) {
      setIsDoneUpdate(true);
    } else {
      setIsDoneUpdate(false);
    }
    if (checkBox4!.checked === true) {
      setHasAttachmentUpdate(true);
    } else {
      setHasAttachmentUpdate(false);
    }
  };

  //   delete ToDo
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
  const showUpdateToDoForm = () => {
    if (showUpdateToDo === "updateToDoForm-visible") {
      setshowUpdateToDo("updateToDoForm-hidden");
    } else if (showUpdateToDo === "updateToDoForm-hidden") {
      setshowUpdateToDo("updateToDoForm-visible");
    }
  };

  return (
    <>
      <h1>Todos</h1>
      <div id="contents">
        {loading && <div>Loading</div>}
        {!loading && (
          <ul id="todos">
            {data.length === 0
              ? "There are no to do's added. Please add a new to do."
              : data.map((item, index) => (
                  <li>
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
                    >{`ID ${item._id.toString()} `}</span>

                    <button onClick={() => removeUser(item._id)}>Delete</button>
                    <button onClick={() => showId()}>{showDivIdText}</button>
                    <button onClick={() => showUpdateToDoForm()}>
                      Update To Do
                    </button>

                    <form
                      onSubmit={(e) => handleSubmitUpdate(e, item._id)}
                      id="updateForm"
                      className={showUpdateToDo}
                      ref={updateToDoForm}
                    >
                      <h3>Update a To Do Item</h3>

                      <label>
                        To Do:
                        <input
                          type="text"
                          name="name"
                          onChange={(event) => setToDo(event.target.value)}
                        />
                      </label>
                      <label htmlFor="isDone">
                        Is done?
                        <input
                          type="checkbox"
                          id="isDoneUpdate"
                          name="isDoneUpdate"
                          onClick={clickCheckbox}
                        ></input>
                      </label>
                      <label htmlFor="hasAttachment">
                        Has Attachment?
                        <input
                          type="checkbox"
                          id="hasAttachmentUpdate"
                          name="hasAttachmentUpdate"
                          onClick={clickCheckbox}
                        ></input>
                      </label>
                      <input type="submit" value="Submit" />
                    </form>
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
              type="checkbox"
              id="isDone"
              name="isDone"
              onClick={clickCheckbox}
            ></input>
          </label>
          <label htmlFor="hasAttachment">
            Has Attachment?
            <input
              type="checkbox"
              id="hasAttachment"
              name="hasAttachment"
              onClick={clickCheckbox}
            ></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Todos;
