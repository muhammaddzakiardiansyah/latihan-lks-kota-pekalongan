import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/user/HomePage"
import DataVote from "./pages/user/DataVote"
import VotePage from "./pages/user/VotePage"
import CandidatePage from "./pages/admin/CandidatePage"
import LoginPage from "./pages/user/LoginPage"
import PrivateRoute from "./components/Fragments/PrivateRoute"
import LogoutPage from "./pages/user/LogoutPage"

function App() {

  return (
    <>
      <Routes>
        {/* Route users */}
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/logout" element={<LogoutPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/data-perhitungan-suara" element={<DataVote />} />
        <Route exact path="/pemilihan" element={<PrivateRoute><VotePage /></PrivateRoute>} />
        {/* Route admin */}
        <Route exact path="/kandidat" element={<PrivateRoute><CandidatePage /></PrivateRoute>} />
        {/* Route not found */}
        <Route exact path="/*" element={'not found'} />
      </Routes>
    </>
  )
}

export default App
