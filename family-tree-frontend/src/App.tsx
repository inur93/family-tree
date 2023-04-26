import { ThemeProvider } from '@mui/material'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { theme } from './config/Theme'
import Toast from './components/shared/Toast'
import CreatePersonPage from './pages/CreatePersonPage'
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
