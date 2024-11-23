import PropTypes from 'prop-types'

const Student = (props) => {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}

// Default Parameters
const Student1 = ({ name = 'Guest', age = 18,  isStudent = false }) => {  
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? 'Yes' : 'No'}</p>
    </div>
  )  
};

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent : PropTypes.bool,
}

Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false,
}

export { Student, Student1 } 