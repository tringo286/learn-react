import ItemList from "./ItemList"

const Content = ({ items, handleCheck, handleDelete }) => {   
    
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}        
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />               
            ) : <p style={{ color: 'Red' }}>Your list is empty</p> }
        </>
    )
}

export default Content