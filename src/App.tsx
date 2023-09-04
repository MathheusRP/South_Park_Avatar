import { GlobalStyled } from "./style/globalStyled"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"

function App() {

  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
