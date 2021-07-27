import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, deleteTodo, removeTodo } from "../action/index";

const Todo = () => {
  const [InputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.TodoReducers.list);

  return (
    <div className="main_div">
      <div className="child_div">
        <figure>
          <figcaption>Add your Todo</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="write your todos...."
            value={InputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <button
            className="fa fa-plus add-btn"
            onClick={() => {
              dispatch(addTodo(InputData));
              setInputData("");
            }}
          >
            +
          </button>
        </div>
        
         <div className="showItems">
          {list.map((ele) => {
            return (
              <div className="eachItem" key={ele.id}>
                <h3>{ele.data}</h3>
                <button
                  className="fa fa-plus add-btn"
                  title="delete item"
                  onClick={() => {
                    dispatch(deleteTodo(ele.id));
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
        <div><button onClick={()=>{dispatch(removeTodo())}}>remove todo</button></div>
      </div>
    </div>
  );
};

export default Todo;
