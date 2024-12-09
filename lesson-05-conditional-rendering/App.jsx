import UserGreeting from "./components/UserGreeting"

const App = () => {
  return (
    <div>
      <UserGreeting />      
      <UserGreeting isLoggedIn={true} />
      <UserGreeting isLoggedIn={true} username='tri' />     
    </div>
  )
}

export default App
