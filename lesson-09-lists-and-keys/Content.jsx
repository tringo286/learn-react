import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item );
        setItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    }

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map(item => (             
                        <li className="item" key={item.id}>
                            <input 
                                type="checkbox" 
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label>{item.item}</label>                    
                            <FaTrashAlt role='button' tabIndex="0" onClick={() => handleDelete(item.id)}/>
                        </li>
                    ))} 
                </ul>  
            ) : <p style={{ color: 'Red' }}>Your list is empty</p> }
        </main>
    )
}

export default Content