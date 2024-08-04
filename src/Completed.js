import React from 'react'
import './Todo.css';

const Completed = ({list,handleDeleteClick}) => {
  return (
    <>
     <div className='flexBox-2'>
     <ul>
      {list.length > 0 ? (
        list.map((item, idx) => (
          item.checked === true ? (
            <li key={item.id}>
               <span>{item.data}</span>
               <button onClick={() => handleDeleteClick(item.id)}> DELETE</button>
            </li>
          ) : null
        ))
      ) : null}
    </ul>

    </div>

    </>
  )
}

export default Completed