import React from 'react'

export const IncompleteTodos= (props)=>{
    const {incompleteTodos, onclickComplete, onClickDelete} = props;
    return (
        <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onclickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    )
}