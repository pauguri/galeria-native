import { useEffect, useState } from 'react'
import './App.css'
import User from './components/User';

function App() {
  const [users, setUsers] = useState<Result[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=20")
      .then(response => response.json())
      .then((data: ApiResponse) => setUsers(data.results));
  }, [])

  return (
    <ul className='user-list'>
      {users.map((user: Result) => {
        return (
          <User userData={user} key={user.id.value} />
        )
      })}
    </ul>
  )
}

export default App
