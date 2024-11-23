import  { Student, Student1 } from "./components/Student"

const App = () => {
  return (
    <div>
      <Student name='Tri' age={25} isStudent={true}/>
      <Student name='Ngo' age={52} isStudent={false}/>
      <Student name='TN' age={40} isStudent={false}/>
      <Student/>
      <Student1/>
    </div>
  )
}

export default App