/* es-lint disable */
export const user = state => state.user

export const isAuth = (state) => {
  if (state.login) return true
  const uid = localStorage.getItem('uid')
  return uid
}

export const isAdmin = state => (state.user.role === 999)

export const isUser = state => (state.user.role === 10)

export const isGuest = state => (state.user.role === 0)
