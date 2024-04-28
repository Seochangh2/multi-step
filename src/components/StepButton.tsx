import { StepData } from "@/dataContainer"
import { nextStep, prevStep } from "@/actions"
import { MultiStepReducer } from "@/reducer/reducer"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

interface StepButtonProps {
  validationFunc: () => boolean
  operationFunc: (flag: boolean) => void
}
const StepButton = ({ validationFunc, operationFunc }: StepButtonProps) => {
  const step = useSelector((state: MultiStepReducer) => state.step)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onNextStep = () => {
    // 각 스텝의 유효성 검사 실행
    // 유효성 검사 통과 시 작업 수행, 다음 스텝 이동
    if (!validationFunc()) {
      operationFunc(false)
      return
    } else {
      operationFunc(true)
      const next_step_path = StepData[step + 1].path
      dispatch(nextStep())
      navigate(next_step_path)
    }
  }
  const onPrevStep = () => {
    // 이전 스텝 이동
    const next_step_path = StepData[step - 1].path
    dispatch(prevStep())
    navigate(next_step_path)
  }

  return (
    <Container>
      <Button onClick={onPrevStep} disabled={step === 0}>
        prev
      </Button>
      <Button onClick={onNextStep} disabled={step === StepData.length - 1}>
        continue
      </Button>
    </Container>
  )
}
export default StepButton
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
`
const Button = styled.button`
  height: 50px;
  width: 100px;
  background-color: black;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:disabled {
    background-color: #666;
    color: #999;
    cursor: not-allowed;
  }
`
