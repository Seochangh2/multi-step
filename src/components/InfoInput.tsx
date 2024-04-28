import { setInformation } from "@/actions"
import { MultiStepReducer } from "@/reducer/reducer"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import styled from "styled-components"

interface InfoTextInputProps {
  info: { header: string; name: string; required: boolean; placeHolder: string }
}
const InfoInput = ({ info }: InfoTextInputProps) => {
  const selectedInfo = useSelector((state: MultiStepReducer) => state.selectedInfo)
  const [value, setValue] = useState(selectedInfo[info.name])
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const dispatch = useDispatch()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    dispatch(setInformation(info.name, e.target.value))
  }
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    dispatch(setInformation(info.name, e.target.value))
  }

  const validationFunc = (nums: string): boolean => {
    // 입력했는지 확인
    if (nums === "") {
      setErrorMsg("Please enter a " + info.header)
      return false
    }
    // 입력된 값이 숫자인지 확인
    if (isNaN(parseFloat(nums)) || !/^-?\d*\.?\d+$/.test(nums)) {
      setErrorMsg("Please enter a number only")
      return false
    }
    // 입력된 값이 0보다 큰지 확인
    if (parseFloat(nums) <= 0) {
      setErrorMsg("Please enter a number greater than 0")
      return false
    }
    // 소수점이 있는 경우 첫째 자리까지만 입력되었는지 확인
    if (nums.includes(".")) {
      const decimalPart = nums.split(".")[1]
      if (decimalPart.length > 1) {
        setErrorMsg("Max Precision is 1 decimal places")
        return false
      }
    }

    setErrorMsg("")
    return true
  }
  const onBlur = () => {
    if (info.header === "Length" || info.header === "Beam" || info.header === "Draft") {
      if (validationFunc(value)) {
        return
      }
    }
  }

  return (
    <div key={info.header}>
      {info.header === "Engine" ? (
        <InformContent>
          <InformTitle>
            {info.header} {info.required && "* (required !)"}
          </InformTitle>
          <RadioContainer>
            <TypeInput type="radio" key={info.header} value={"1"} onChange={onChangeRadio} checked={value === "1"} />
            {"Single"}
            <TypeInput type="radio" key={info.header} value={"2"} onChange={onChangeRadio} checked={value === "2"} />
            {"Twin"}
          </RadioContainer>
        </InformContent>
      ) : (
        <InformContent>
          <InformTitle>
            {info.header} {info.required && "* (required !)"}
          </InformTitle>
          <InformInput onChange={onChange} value={value} placeholder={info.placeHolder} onBlur={onBlur}></InformInput>
          <ErrorText>{errorMsg}</ErrorText>
        </InformContent>
      )}
    </div>
  )
}
const InformContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  font-size: 10px;
  font-weight: bold;
  height: 80px;
  width: 200px;
  margin-top: 20px;
`
const InformTitle = styled.div`
  display: flex;
  font-size: 13px;
  height: 30%;
  width: 100%;
`
const InformInput = styled.input`
  padding: 10px; /* 내부 여백 */
  border: 0.5px solid #929292; /* 테두리 스타일 */
  border-radius: 5px; /* 테두리의 둥근 정도 */
  font-size: 10px; /* 글자 크기 */
  outline: none; /* 포커스 시 테두리 제거 */
  height: 10%;
  width: 80%;
`
const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30%;
  width: 80%;
`
const TypeInput = styled.input.attrs({ type: "radio" })`
  appearance: none; /* 기본 스타일 제거 */
  width: 20px; /* 너비 */
  height: 20px; /* 높이 */
  border-radius: 50%; /* 둥근 테두리 */
  border: 2px solid #666; /* 테두리 스타일 */
  background-color: transparent; /* 배경색 투명 */
  outline: none; /* 포커스 시 테두리 제거 */
  cursor: pointer; /* 포인터 커서 */
  /* 체크된 상태일 때의 스타일 */
  &:checked {
    background-color: #352e87; /* 배경색 변경 */
  }
  font-size: 10px;
`
const ErrorText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 10px;
  color: #da4e4e;
  margin-top: 5%;
  height: 25%;
  width: 100%;
`
export default InfoInput
