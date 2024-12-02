import List from "./List"

const App = () => {

const fruits = [{ id: 1, name: 'apple', calories: 95 },
                { id: 2, name: 'orange', calories: 62 },
                { id: 3, name: 'banana', calories: 105 },
                { id: 4, name: 'coconut', calories: 150 },
                { id: 5, name: 'pineapple', calories: 82 }];

const vegetables = [
                  { id: 6, name: 'carrot', calories: 25 },
                  { id: 7, name: 'broccoli', calories: 55 },
                  { id: 8, name: 'spinach', calories: 23 },
                  { id: 9, name: 'potato', calories: 77 },
                  { id: 10, name: 'bell pepper', calories: 40 }
];
                  
  return (
    <div>
      { fruits.length > 0 && <List items={fruits} category='Fruits'/>}   
      { vegetables.length > 0 && <List items={vegetables} category='Vegetables'/>}  
      <List></List>     
    </div>
  )
}

export default App
