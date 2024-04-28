import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const PreventHandler = () => {
  const navigate = useNavigate()
  const preventGoBackHandler = () => {
    navigate(1)
  }
  const preventGoFrontHandler = () => {
    navigate(-1)
  }

  // 상단 바를 통한 페이지 이동 방지
  useEffect(() => {
    window.addEventListener("popstate", preventGoBackHandler)
    return () => {
      window.addEventListener("popstate", preventGoBackHandler)
    }
  }, [])
  useEffect(() => {
    window.addEventListener("pushstate", preventGoFrontHandler)
    return () => {
      window.addEventListener("pushstate", preventGoFrontHandler)
    }
  }, [])

  return <></>
}
export default PreventHandler
