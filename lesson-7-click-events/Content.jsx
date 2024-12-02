const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log('You clicked it')
    }
    
    const handleClick2 = ( name ) => {
        console.log(`${name} clicked it`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    const handleDoubleClick = () => {
        console.log('You double-clicked it')
    }

    return (
        <main>
            <p onDoubleClick={handleDoubleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click It</button>
            <button onClick={() => handleClick2('Tri')}>Click It</button>
            <button onClick={(e) => handleClick3(e)}>Click It</button>        
        </main>
    )
}

export default Content