import { FaTrashAlt } from "react-icons/fa"

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (              
        <li className="item" key={item.id}>
            <input 
                type="checkbox" 
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label>{item.item}</label>                    
            <FaTrashAlt role='button' tabIndex="0" onClick={() => handleDelete(item.id)} aria-label={`Delete ${item.item}`}/>
        </li>      
  )
}

export default LineItem
