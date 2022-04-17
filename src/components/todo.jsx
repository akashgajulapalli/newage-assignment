import React from "react";

const Todo = () => {
  const defaultData = {
    taskName: "",
    created: "",
    due: "",
    status: "",
    notes: "",
    assignee: "",
    category: "",
    jiraId: "",
    mockUp: "",
  };
  const [todo, setTodo] = React.useState(defaultData);
  const [todos, setTodos] = React.useState([]);
  const [completedTodos, setCompletedTodos] = React.useState([]);

  const addTodo = () => {
    const check = Object.values(todo).filter((e) => e === "");
    if (check.length > 0) {
      alert("Please fill all the fields");
      return;
    }
    setTodos([...todos, todo]);
    setTodo(defaultData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const completeTodo = (todo) => {
    setCompletedTodos([...completedTodos, todo]);
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const revertTodo = (todo) => {
    setTodos([...todos, todo]);
    const index = completedTodos.indexOf(todo);
    completedTodos.splice(index, 1);
    setCompletedTodos([...completedTodos]);
  };

  const editTodo = (todo) => {
    setTodo(todo);
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <>
      <div className="todo">
        <form>
          <div className="row">
            <div className="item">
              <input
                type="text"
                name={"taskName"}
                className="form-control"
                placeholder="Task Name"
                value={todo.taskName}
                onChange={handleChange}
                required={true}
                style={{ width: "29vw", height: "2rem", padding: "7px" }}
              />
            </div>
            <div className="item">
              <select
                className="form-control"
                name={"category"}
                value={todo.category}
                onChange={handleChange}
                style={{ width: "29vw", height: "3rem", padding: "7px" }}
              >
                <option value={""}>Select category</option>
                <option value={"bug"}>NAP bug task</option>
                <option value={"dev"}>NAP dev</option>
                <option value={"project"}>New project</option>
                <option value={"update"}>HP update</option>
              </select>
            </div>
            <div className="item">
              <input
                type="text"
                name={"jiraId"}
                className="form-control"
                placeholder="Jira ID"
                value={todo.jiraId}
                onChange={handleChange}
                style={{ width: "11vw", height: "2rem", padding: "7px" }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="item">
              <select
                className="form-control"
                name={"assignee"}
                value={todo.assignee}
                onChange={handleChange}
                style={{ width: "17vw", height: "3rem", padding: "7px" }}
              >
                <option value={""}>Select Assignee</option>
                <option value={"bibhu"}>Bibhu</option>
                <option value={"tanzil"}>Tanzil</option>
              </select>
            </div>
            <div className="item">
              <select
                className="form-control"
                name={"status"}
                value={todo.status}
                onChange={handleChange}
                style={{ width: "17vw", height: "3rem", padding: "7px" }}
              >
                <option value={""}>Select Status</option>
                <option value={"qc"}>In QC</option>
                <option value={"deployment"}>In Deployment</option>
                <option value={"hold"}>On Hold</option>
                <option value={"completed"}>Completed</option>
              </select>
            </div>
            <div className="item">
              <input
                type="date"
                className="form-control"
                name={"created"}
                value={todo.created}
                onChange={handleChange}
                style={{ width: "17vw", height: "2rem", padding: "7px" }}
              />
            </div>
            <div className="item">
              <input
                type="date"
                className="form-control"
                name={"due"}
                value={todo.due}
                onChange={handleChange}
                style={{ width: "17vw", height: "2rem", padding: "7px" }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="item">
              <input
                type="text"
                className="form-control"
                placeholder="Mock UP"
                name={"mockUp"}
                value={todo.mockUp}
                onChange={handleChange}
                style={{ width: "73vw", height: "2rem", padding: "7px" }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="item">
              <textarea
                type="textarea"
                className="form-control"
                name={"notes"}
                placeholder="Other comments"
                value={todo.notes}
                onChange={handleChange}
                style={{ width: "73vw", height: "5rem", padding: "7px" }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <button
              type="button"
              className="item"
              onClick={addTodo}
              style={{
                width: "73vw",
                height: "3rem",
                padding: "7px",
                color: "#fff",
                border: "none",
                backgroundColor: "#f74020",
              }}
            >
              SUBMIT
            </button>
          </div>
        </form>
        <br />
        <br />
      </div>
      <div className="tables">
        <table className="table1">
          <thead>
            <tr>
              <th scope="col">SL.NO.</th>
              <th scope="col">TASK NAME</th>
              <th scope="col">CREATED</th>
              <th scope="col">DUE</th>
              <th scope="col">ASSIGNEE</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">STATUS</th>
              <th scope="col">JIRA ID</th>
              <th scope="col">MOCK-UP</th>
              <th scope="col">NOTES</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>{todo.taskName}</td>
                  <td>{todo.created}</td>
                  <td>{todo.due}</td>
                  <td>{todo.assignee}</td>
                  <td>{todo.category}</td>
                  <td>{todo.status}</td>
                  <td>{todo.jiraId}</td>
                  <td>{todo.mockUp}</td>
                  <td>{todo.notes}</td>
                  <td>
                    <button
                      type="button"
                      className="btn"
                      style={{
                        marginRight: "1rem",
                        color: "#fff",
                        backgroundColor: "#f76420",
                      }}
                      onClick={() => editTodo(todo)}
                    >
                      EDIT
                    </button>
                    <button
                      type="button"
                      className="btn"
                      style={{ color: "#fff", backgroundColor: "#f76420" }}
                      onClick={() => completeTodo(todo)}
                    >
                      {" "}
                      DONE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <hr />
      <div className="tables">
        <table className="table1">
          <thead className="thead-light">
            <tr>
              <th scope="col">SL.NO.</th>
              <th scope="col">TASK NAME</th>
              <th scope="col">CREATED</th>
              <th scope="col">DUE</th>
              <th scope="col">ASSIGNEE</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">STATUS</th>
              <th scope="col">JIRA ID</th>
              <th scope="col">MOCK-UP</th>
              <th scope="col">NOTES</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {completedTodos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>{todo.taskName}</td>
                  <td>{todo.created}</td>
                  <td>{todo.due}</td>
                  <td>{todo.assignee}</td>
                  <td>{todo.category}</td>
                  <td>{todo.status}</td>
                  <td>{todo.jiraId}</td>
                  <td>{todo.mockUp}</td>
                  <td>{todo.notes}</td>
                  <td>
                    <button
                      type="button"
                      className="btn"
                      style={{ color: "#fff", backgroundColor: "#f76420" }}
                      onClick={() => revertTodo(todo)}
                    >
                      REVERT
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;
