import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/user/HomePage"
import DataVote from "./pages/user/DataVote"
import VotePage from "./pages/user/VotePage"
import CandidatePage from "./pages/admin/CandidatePage"

function App() {

  return (
    <>
      <Routes>
        {/* Route users */}
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/data-perhitungan-suara" element={<DataVote />} />
        <Route exact path="/pemilihan" element={<VotePage />} />
        {/* Route admin */}
        <Route exact path="/kandidat" element={<CandidatePage />} />
        {/* Route not found */}
        <Route exact path="/*" element={'not found'} />
      </Routes>
    </>
  )
}

export default App
