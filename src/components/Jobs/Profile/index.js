import './index.css'

const Profile = props => {
  const {user} = props
  const {avatar, bio, name} = user
  return (
    <div className="profile">
      <img className="avatar" src={avatar} alt="profile" />
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  )
}

export default Profile
