import { resetData } from "@/actions"
import { useEffect } from "react"
import { GiBattleship } from "react-icons/gi"
import { useDispatch } from "react-redux"
import styled from "styled-components"

const RegisteredStep = () => {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(resetData())
  }, [])
  return (
    <Container>
      <GiBattleship size={200} />
      Great ! You are now registered
    </Container>
  )
}
export default RegisteredStep
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
  width: 100%;
  font-size: 20px;
`
