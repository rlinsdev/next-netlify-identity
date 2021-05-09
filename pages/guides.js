import { useContext, useEffect } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'

export default function Guides () {
  const { user, authReady } = useContext(AuthContext)

  // fetch('http://example.com/movies.json')
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  useEffect(() => {
    if (authReady) {
      window.fetch('/.netlify/functions/guides', user && {
        headers: {
          Authorization: 'Bearer ' + user.token.access_token
        }
      })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  }, [user, authReady])

  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div>
  )
}
