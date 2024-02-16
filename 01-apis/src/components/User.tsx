import './User.css';

type Params = {
  userData: Result;
}
export default function User({ userData }: Params) {
  return (
    <li className="user">
      <img className='profile-img' alt="profile picture" src={userData.picture.medium} />
      <p className='user-details'>
        <strong>{userData.name.first}</strong><br />
        {userData.location.city}<br />
      </p>
    </li>
  )
}
