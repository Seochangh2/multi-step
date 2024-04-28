import { StepData } from "@/dataContainer"
import { MultiStepReducer } from "@/reducer/reducer"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

const StepTitle: React.FC = () => {
  const step = useSelector((state: MultiStepReducer) => state.step)
  const location = useLocation()
  location.pathname === "/registeredStep"
  // Step에 맞는 타이틀
  return <Container>{location.pathname !== "/registeredStep" && <Title>{StepData[step].title}</Title>}</Container>
}
export default StepTitle
const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  height: 100px;
  width: 100%;
`
const Title = styled.div`
  font-weight: bold;
  margin-left: 7.5%;
`
