import React, { useState, useEffect } from 'react';
import './Todo.css';
import Pending from './Pending';
import Completed from './Completed';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState('');

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleAdd = () => {
    if (data.trim() === '') return; // Prevent adding empty items
    const newItem = {  id: uuidv4(), data, checked: false };
    setList((prevList) => [...prevList, newItem]);
    setData('');
  };

  const handleBox = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  const handleEditClick = (id) => {
    const itemToEdit = list.find((item) => item.id === id);
    if (itemToEdit) {
      setEditIndex(id);
      setNewText(itemToEdit.data);
      setIsEditing(true);
    }
  };

  const handleChangeEdit = (e) => {
    setNewText(e.target.value);
  };

  const handleSaveClick = () => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === editIndex ? { ...item, data: newText } : item
      )
    );
    setIsEditing(false);
    setEditIndex(null);
    setNewText('');
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditIndex(null);
    setNewText('');
  };

  const handleDeleteClick = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

 
  return (
    <>
      <div className="topnav">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="ADD ITEM.."
            value={data}
            onChange={handleChange}
          />
          <button onClick={handleAdd}>ADD</button>
        </form>
        <div className="flex">
            <Pending
              list={list}
              handleBox={handleBox}
              isEditing={isEditing}
              editIndex={editIndex}
              newText={newText}
              handleChangeEdit={handleChangeEdit}
              handleSaveClick={handleSaveClick}
              handleCancelClick={handleCancelClick}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
            <Completed list={list} handleDeleteClick={handleDeleteClick} />
        </div>
      </div>
    </>
  );
};

export default Todo;
