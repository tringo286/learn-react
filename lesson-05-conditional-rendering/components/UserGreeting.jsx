const UserGreeting = ({isLoggedIn=false, username = 'guest'}) => {
  return (isLoggedIn ? <h2>Welcome {username} </h2> : <h2>Please log in to continue</h2>) 
}

export default UserGreeting
