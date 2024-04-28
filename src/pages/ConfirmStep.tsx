import StepButton from "@/components/StepButton"
import { MultiStepReducer } from "@/reducer/reducer"
import axios from "axios"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { resultType } from "./InformationStep"

const ConfirmStep = () => {
  const resultInfo = useSelector((state: MultiStepReducer) => state.resultInfo)
  const validationFunc = () => {
    return window.confirm("Do you want to register?")
  }
  const operationFunc = (flag: boolean) => {
    if (flag) {
      // POST 요청
      axios
        .post<{ data: resultType }>(`/api/registration`, {
          info: resultInfo,
        })
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <Container>
      <ConfirmContainer>
        <InfoText>{"{"}</InfoText>
        {Object.keys(resultInfo).map((key, idx) => {
          if (resultInfo[key] !== null) {
            return (
              <InfoText key={idx}>
                {`"`}
                {key}
                {`"`}
                {" : "}
                {typeof resultInfo[key] === "string" ? `"` : ""}
                {resultInfo[key]}
                {typeof resultInfo[key] === "string" ? `"` : ""}
              </InfoText>
            )
          }
        })}
        <InfoText>{"}"}</InfoText>
      </ConfirmContainer>
      <StepButton validationFunc={validationFunc} operationFunc={operationFunc}></StepButton>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  width: 100%;
`
const ConfirmContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  height: 250px;
  width: 80%;
  border-radius: 10px;
  padding: 20px;
  background-color: #e5e5e5;
`

const InfoText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 5px;
  height: 30px;
`

export default ConfirmStep
