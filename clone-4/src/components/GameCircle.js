import React from "react";
import '../Game.css'




const GameCircle = ({ id, children,circleClicked,className }) => {

  //callback
  // const onClick = (id) => {
  //   onclickedCircle(id);
  // };



  return (
    <div className={`gameCircle ${className}`}  onClick={() => circleClicked(id)}>
    {/* <div className={`gameCircle ${id %2 === 0 ? "odd":"even"}`}  onClick={() => onclickedCircle(id)}> */}
        {children}
      {/* {children} + {id}  */}
    </div>
  );
};

export default GameCircle;
