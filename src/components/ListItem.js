import React from "react";
import "../style/ListItem.css";
const ListItem = (props) => {
  const style = {
    color: "#ff0047",
    textTransform: "uppercase",
  };

  const list = props.list.map((item) => (
    <div key={item.id}>
      <span style={item.important ? style : null}>{item.text}</span>{" "}
      <button onClick={() => props.click(item.id)}>x</button>
    </div>
  ));

  return (
    <div className="list">
      {list.length > 0 ? list : <p>No tasks :)</p>}
    </div>
  );
};

export default ListItem;
