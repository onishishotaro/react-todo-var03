import React from "react";

export const Complete =(props)=>{
    const {completeTodos, onclickBack} = props;
    return(
        <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onclickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    )

}