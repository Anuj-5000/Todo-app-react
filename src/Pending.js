import React from 'react';
import './Todo.css';

const Pending = ({
  list,
  handleBox,
  isEditing,
  editIndex,
  newText,
  handleChangeEdit,
  handleSaveClick,
  handleCancelClick,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <>
      <div className="flexBox-1">
        <ul>
          {list.map((item) => (
            item.checked===false && (
              <li key={item.id}>
                {isEditing && editIndex === item.id ? (
                  <>
                    <input
                      type="text"
                      value={newText}
                      onChange={handleChangeEdit}
                    />
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleBox(item.id)}
                    />
                    <span>{item.data}</span>
                    <button onClick={() => handleEditClick(item.id)}> EDIT</button>
                    <button onClick={() => handleDeleteClick(item.id)}> DELETE</button>
                  </>
                )}
              </li>
            )
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pending;
