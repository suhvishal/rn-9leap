import React from "react";

//items = [  { _id : xxx, name : xxxx}, ..... ]

function ListGroup({items, selectedItem,  valueProperty, textProperty, onItemSelect}) {
  return (
    <ul className="list-group">
        { items.map( item => (
            <li key={item[valueProperty]} 
                onClick={ ()=> onItemSelect(item)} 
                className={item === selectedItem ? 'list-group-item active' : 'list-group-item'}>
                {item[textProperty]}
            </li>
        ) )}
    </ul>
  );
}

ListGroup.defaultProps = {
    valueProperty : '_id',
    textProperty : 'name'
}

export default ListGroup;
