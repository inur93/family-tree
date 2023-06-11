import { ThemeProvider } from '@mui/material'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { FamilyTreeApi } from './api'
import Toast from './components/shared/Toast'
import { theme } from './config/Theme'
import UserContext from './contexts/UserContext'
import { useData } from './hooks/useData'
import CreatePersonPage from './pages/CreatePersonPage'
import CreateRelationshipPage from './pages/CreateRelationshipPage'
import EditRelationshipPage from './pages/EditRelationshipPage'
import FamilyOverviewPage from './pages/FamilyOverviewPage'
import LoginPage from './pages/LoginPage'
import UpdatePersonPage from './pages/UpdatePersonPage'
import NavigationBar from './components/navigation/NavigationBar'
import { UserProfile } from './api/ApiClient'
import { useEffect } from 'react'
import { useToast } from './hooks/useToast'

function AppWithRouter() {
  const [user, refreshUser] = useData(() => FamilyTreeApi.me())
  const toast = useToast()
  useEffect(() => {
    if (user.error) {
      toast.error(user.error)
    }
  }, [user.error])

  const handleLogout = async () => {
    await FamilyTreeApi.signout()
    await refreshUser()
  }
  if (user.loading) return null

  if (!user.data?.isLoggedIn) {
    return <LoginPage callback={refreshUser} />
  }
  return (
    <UserContext.Provider value={[user.data ?? new UserProfile()]}>
      <ThemeProvider theme={theme}>
        <>
          <NavigationBar handleLogout={handleLogout} />
          <Routes>
            <Route
              path="create-person"
              element={<CreatePersonPage />}
            />
            <Route
              path="create-relationship"
              element={<CreateRelationshipPage />}
            />
            <Route
              path="edit-person"
              element={<UpdatePersonPage />}
            />
            <Route path="relationship">
              <Route
                path=":id"
                element={<EditRelationshipPage />}
              />
            </Route>
            <Route
              path="/"
              element={<FamilyOverviewPage />}
            />
          </Routes>
        </>
      </ThemeProvider>
    </UserContext.Provider>
  )
}

function App() {
  return (
    <Router>
      <Toast>
        <AppWithRouter />
      </Toast>
    </Router>
  )
}

export default App
