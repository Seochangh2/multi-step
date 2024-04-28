import { setResultInfo } from "@/actions"
import InfoInput from "@/components/InfoInput"
import StepButton from "@/components/StepButton"
import { InfoData, InfoType } from "@/dataContainer"
import { MultiStepReducer } from "@/reducer/reducer"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Container } from "./TypeStep"
import styled from "styled-components"

export type resultType = {
  shipType: string
  numOfEngines: string
  shipName: string | null
  callSign: string | null
  length: number
  beam: number
  draft: number
  [key: string]: string | number | null
}
const InformationStep = () => {
  const selectedInfo = useSelector((state: MultiStepReducer) => state.selectedInfo)
  const dispatch = useDispatch()
  const validationFunc = (): boolean => {
    const flag = InfoData.every((info: InfoType) => {
      const nums = selectedInfo[info.name]
      if (info.required) {
        // 입력했는지 확인
        if (nums === "") {
          return false
        }
        // 입력된 값이 숫자인지 확인
        if (isNaN(parseFloat(nums)) || !/^-?\d*\.?\d+$/.test(nums)) {
          return false
        }
        // 입력된 값이 0보다 큰지 확인
        if (parseFloat(nums) <= 0) {
          return false
        }
        // 소수점이 있는 경우 첫째 자리까지만 입력되었는지 확인
        if (nums.includes(".")) {
          const decimalPart = nums.split(".")[1]
          if (decimalPart.length > 1) {
            return false
          }
        }
        return true
      } else {
        return true
      }
    })
    return flag
  }
  const operationFunc = (flag: boolean) => {
    if (flag) {
      const result: resultType = {
        shipType: "",
        numOfEngines: "",
        shipName: "",
        callSign: "",
        length: 0,
        beam: 0,
        draft: 0,
      }
      result.shipType = selectedInfo.shipType
      InfoData.forEach((info: InfoType) => {
        if (info.type === "number") {
          result[info.name] = parseFloat(selectedInfo[info.name])
        } else {
          if (selectedInfo[info.name] === "") result[info.name] = null
          else {
            result[info.name] = selectedInfo[info.name]
          }
        }
        dispatch(setResultInfo(result))
      })
    } else {
      alert("Please correct the information !")
    }
  }

  return (
    <Container>
      <InformContainer>
        {InfoData.map((info: { header: string; name: string; required: boolean; placeHolder: string }) => {
          return <InfoInput info={info} key={info.header}></InfoInput>
        })}
      </InformContainer>
      <StepButton validationFunc={validationFunc} operationFunc={operationFunc}></StepButton>
    </Container>
  )
}
export default InformationStep
const InformContainer = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  height: 250px;
  width: 80%;
`
