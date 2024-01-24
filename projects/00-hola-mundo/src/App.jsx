
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Duran',
    isFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false,
  }
]
export function App() {

  return (
    <section className="App">
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollow={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
      
    </section>
  )
}