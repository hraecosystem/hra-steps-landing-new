import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import GlobalStyles from '../GlobalStyles'



function App() {

  return (
    <>
    <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}

export default App

