import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"
import TypeStep from "./pages/TypeStep"
import InformationStep from "./pages/InformationStep"
import ConfirmStep from "./pages/ConfirmStep"
import RegisteredStep from "./pages/RegisteredStep"
import Header from "./components/Header"
import StepTitle from "./components/StepTitle"
import PreventHandler from "./components/PreventHandler"
import styled from "styled-components"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Content>
          <Header></Header>
          <StepTitle></StepTitle>
          <PreventHandler></PreventHandler>
          <Routes>
            <Route path="/" Component={TypeStep} />
            <Route path="/informationStep" Component={InformationStep} />
            <Route path="/confirmStep" Component={ConfirmStep} />
            <Route path="/registeredStep" Component={RegisteredStep}></Route>
          </Routes>
        </Content>
      </Container>
    </BrowserRouter>
  )
}

export default App
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: solid 1px #bdbdbd;
  height: 600px;
  width: 1000px;
  border-radius: 15px;
`
