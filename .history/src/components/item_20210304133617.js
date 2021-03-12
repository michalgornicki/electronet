import React from 'react';


const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
            return (
                <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>)
            })}

            <button className="button" onClick={handleFilter}>Clear completed</button>
        </div>
    )
};

export default Item;