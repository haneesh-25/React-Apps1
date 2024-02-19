import data from './data';
import { useState } from 'react';
import './styles.css'

function Accordian() {

  const [itemId, setItemId] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiId, setMultiId] = useState([]);

  function handleClick(elementId) {
    setItemId(elementId == itemId ? null : elementId)
  }

  function enableMultiSelection() {
    setMultiSelection(!multiSelection)
    setMultiId([])
    setItemId(null)
  }

  function handleMultiSelection(elementId) {
    let copy = [...multiId]
    let index = multiId.indexOf(elementId)
    if (index == -1) {
      copy.push(elementId)
    } else {
      copy.splice(index,1)
    }
    setMultiId(copy)
  }


  return (
    <div className='wrapper'>
      <button onClick={enableMultiSelection}>Toggle Multi Selection</button>
    {
      data.map((item) => 
      (
        <div className='item'>
          <div className='question' onClick={() => multiSelection ? handleMultiSelection(item.id) : handleClick(item.id)}>
            <h3>{item.question}</h3>
            <span>+</span>
          </div>
          {
            multiSelection ?
            (
              multiId.indexOf(item.id) != -1 ?
                <p>{item.answer}</p> 
              : null 
            )
            : (
              item.id == itemId ?
              <p>{item.answer}</p> 
              : null
            )
          }
        </div>
      ))
    }
    </div>
  ) 
}

export default Accordian
