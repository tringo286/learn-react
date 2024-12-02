import { useState } from "react"

const Content = () => {
    const [name, setName] = useState('Guest');
    const [count, setCount] = useState(0);
  
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    };

    const handleClick = () => {
        setCount(count+1);
    };

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Click It</button>          
        </main>
    )
}

export default Content