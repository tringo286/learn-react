const List = (props) => {

  const itemsList = props.items;   
  const category = props.category; 

    // itemsList.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical    
    // itemsList.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    // itemsList.sort((a, b) => a.calories - b.calories) // Numeric
    // itemsList.sort((a, b) => b.calories - a.calories) // Revese Numeric
    // itemsList.filter(fruit => fruit.calories > 100) // highCalFruits
    // itemsList.filter(fruit => fruit.calories <= 100) // lowCalFruits
    
    const listItems = itemsList.map(item => {
        return <li key={item.id}>{item.name}: &nbsp; {item.calories}</li>;
    })
  return (
    <>
    <h3>{category}</h3>
    <ol>
        {listItems}  
    </ol>
    </>
  )
}

List.defaultProps = {
  items: [
    { id: 0, name: 'default item', calories: 0 }
  ],
  category: 'Default Category'
};

export default List
