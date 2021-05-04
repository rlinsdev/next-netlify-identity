import { createContext, useEffect, useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    netlifyIdentity.on('login', (user) => {
      setUser(user)
      console.log(user)
      netlifyIdentity.close()
    })

    netlifyIdentity.init()
  }, [])

  const login = () => {
    netlifyIdentity.open()
  }

  const context = { user: user, login: login }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext