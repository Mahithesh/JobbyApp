import './index.css'

const Profile = props => {
  const {user} = props
  const {avatar, bio} = user
  return (
    <div className="profile">
      <img className="avatar" src={avatar} alt="profile" />
      <h1 className="name">Mahithesh Ujarla</h1>
      <p>{bio}</p>
    </div>
  )
}

export default Profile
