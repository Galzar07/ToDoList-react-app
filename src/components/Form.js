import React from "react";
import "../style/Form.css"
const Form = (props) => {
  
  return (
    <form className="addTask">
      <input type="text" placeholder="add task"  value={props.value} onChange={props.change}/>
      <label className="chbox">
        <input type="checkbox" checked={props.checked} onChange={props.handleChecked}/>
        <span >important</span>
      </label>
      <br />
      <button className="button" onClick={props.click}>ADD</button>
    </form>
  );
};

export default Form;
