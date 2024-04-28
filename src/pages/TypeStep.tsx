import { setInformation } from "@/actions"
import StepButton from "@/components/StepButton"
import { TypeData } from "@/dataContainer"
import { MultiStepReducer } from "@/reducer/reducer"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import styled from "styled-components"

const TypeStep = () => {
  const shipType = useSelector((state: MultiStepReducer) => state.selectedInfo.shipType)
  const [selectedType, setSelectedType] = useState<string>(shipType)
  const [validError, setValidError] = useState<boolean>(false)

  const dispatch = useDispatch()

  const validationFunc = (): boolean => {
    if (selectedType === "") {
      return false
    } else {
      return true
    }
  }
  const operationFunc = (flag: boolean) => {
    if (flag) {
      dispatch(setInformation("shipType", selectedType))
      setValidError(false)
    } else {
      setValidError(true)
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value)
  }
  return (
    <Container>
      <TypeContainer>
        {TypeData.map((type: string, idx: number) => {
          return (
            <RadioContainer key={idx}>
              <TypeInput
                type="radio"
                key={idx}
                value={TypeData[idx]}
                onChange={onChange}
                checked={type == selectedType}
              />
              {type}
            </RadioContainer>
          )
        })}
      </TypeContainer>

      {validError && <ErrorText>Please select one of the types</ErrorText>}
      <StepButton validationFunc={validationFunc} operationFunc={operationFunc}></StepButton>
    </Container>
  )
}
export default TypeStep

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
  width: 100%;
`
const TypeContainer = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  height: 250px;
  width: 80%;
`
const RadioContainer = styled.label`
  display: flex;
  align-items: center;
`

const TypeInput = styled.input.attrs({ type: "radio" })`
  appearance: none; /* 기본 스타일 제거 */
  width: 20px; /* 너비 */
  height: 20px; /* 높이 */
  border-radius: 50%; /* 둥근 테두리 */
  border: 2px solid #666; /* 테두리 스타일 */
  background-color: transparent; /* 배경색 투명 */
  outline: none; /* 포커스 시 테두리 제거 */
  margin-right: 5px; /* 오른쪽 마진 */
  cursor: pointer; /* 포인터 커서 */
  /* 체크된 상태일 때의 스타일 */
  &:checked {
    background-color: #352e87; /* 배경색 변경 */
  }
`

const ErrorText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 20px;
  color: #da4e4e;
  height: 30px;
  width: 85%;
`
