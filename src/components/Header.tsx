import { StepData } from "@/dataContainer";
import { MultiStepReducer } from "@/reducer/reducer";
import { useSelector } from "react-redux";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const step = useSelector((state: MultiStepReducer) => state.step);

  const location = useLocation();
  location.pathname === "/registeredStep";
  return (
    <Container>
      {location.pathname !== "/registeredStep" &&
        StepData.map((info, idx) => {
          // 완료한 스텝은 체크
          return (
            <StepViewer key={idx}>
              {step <= idx ? <FaRegCheckCircle /> : <FaCheckCircle />}{" "}
              {info.title}
            </StepViewer>
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
`;
const StepViewer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  height: 80px;
  width: 200px;
  margin-top: 20px;
`;
export default Header;
