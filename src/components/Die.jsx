import React from "react";
export default function Die(props) {
  return (
    <div
      onClick={() => props.hold(props.id)}
      className={props.isHeld ? "dice active" : "dice"}
    >
      {props.value}
    </div>
  );
}
