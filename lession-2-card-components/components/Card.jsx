import profilePic from '../assets/profilePic.webp'

const Card = () => {
  return (
    <div className='card '>
        <img className='card-img' src={profilePic}alt="profile picture" />
        <h2 className='card-tittle'>Tri Ngo</h2>
        <p className='card-text'>I am a software developer</p>
    </div>
  )
}

export default Card
