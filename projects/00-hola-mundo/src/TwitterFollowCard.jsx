import { useState } from 'react'

export function TwitterFollowCard({ children, userName, initialIsFollow}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollow)
    const formatUserName = (userName) => `@${userName}`

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
      : 'tw-followCard-button'
  
    return (
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img className="tw-followCard-avatar" alt="Avatar midudev" src={`https://unavatar.io/${userName}`}></img>
          <div className='tw-followCard-info'>
            <strong>{ children }</strong>
            <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>

                <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
          </button>
        </aside>
     </article>
     
    )
  }