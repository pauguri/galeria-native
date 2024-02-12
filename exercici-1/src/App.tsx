import './App.css'
import users from './mocks/users.json';

function App() {


  return (
    <div>
      {users.results.map((user) => {
        return (
          <div>
            <img alt="profile picture" src={user.picture.medium} />
            <p style={{ margin: '0px 0px 32px' }}>
              <strong>{user.name.first}</strong><br />
              {user.location.country}<br />
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default App
