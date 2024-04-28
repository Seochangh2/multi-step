import { multiStepAction, NEXT_STEP, PREV_STEP, RESET_DATA, SET_INFORMATION, SET_RESULT_INFO } from "../actions/index"

export interface State {
  step: number
  // 입력을 위한 데이터 이므로 string 통일
  selectedInfo: {
    shipType: string
    numOfEngines: string
    shipName: string
    callSign: string
    length: string
    beam: string
    draft: string
    [key: string]: string
  }
  // 전송될 데이터이므로 필수 값이 아닌 값은 null 포함
  resultInfo: {
    shipType: string
    numOfEngines: string
    shipName: string | null
    callSign: string | null
    length: number
    beam: number
    draft: number
    [key: string]: string | number | null
  }
}

const initialState: State = {
  step: 0,
  selectedInfo: {
    shipType: "",
    numOfEngines: "",
    shipName: "",
    callSign: "",
    length: "",
    beam: "",
    draft: "",
  },
  resultInfo: {
    shipType: "",
    numOfEngines: "",
    shipName: null,
    callSign: null,
    length: 0,
    beam: 0,
    draft: 0,
  },
}

const multiStepReducer = (state: State = initialState, action: multiStepAction): State => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      }
    case PREV_STEP:
      return {
        ...state,
        step: state.step - 1,
      }
    case SET_INFORMATION:
      return {
        ...state,
        selectedInfo: {
          ...state.selectedInfo,
          [action.name]: action.value,
        },
      }
    case SET_RESULT_INFO:
      return {
        ...state,
        resultInfo: {
          ...action.resultInfo,
        },
      }
    case RESET_DATA:
      return initialState
    default:
      return state
  }
}

export default multiStepReducer
export type MultiStepReducer = ReturnType<typeof multiStepReducer>
