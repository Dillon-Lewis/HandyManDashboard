import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Login from './pages/Login'

// Dashboard later
// import ProtectedRoute from './routes/ProtectedRoute'
// import AppLayout from './components/layout/AppLayout'
// import Dashboard from './pages/app/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Protected (Day 3+) */}
        {/*
        <Route
          path="/app/*"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Dashboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        */}
      </Routes>
    </BrowserRouter>
  )
}
