import { ThemeProvider } from '@mui/material'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Toast from './components/shared/Toast'
import { theme } from './config/Theme'
import CreatePersonPage from './pages/CreatePersonPage'
import CreateRelationshipPage from './pages/CreateRelationshipPage'
import FamilyOverviewPage from './pages/FamilyOverviewPage'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Toast>
          <Routes>
            <Route
              path="/create-person"
              element={<CreatePersonPage />}
            />
            <Route
              path="/create-relationship"
              element={<CreateRelationshipPage />}
            />
            <Route
              path="/"
              element={<FamilyOverviewPage />}
            />
          </Routes>
        </Toast>
      </ThemeProvider>
    </Router>
  )
}

export default App
