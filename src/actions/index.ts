import { resultType } from "@/pages/InformationStep"

export const NEXT_STEP = "step/NEXT_STEP" as const
export const PREV_STEP = "step/PREV_SETP" as const
export const SET_TYPE = "inform/SET_TYPE" as const
export const SET_INFORMATION = "inform/SET_INFORMATION" as const
export const SET_RESULT_INFO = "inform/SET_RESULTINFO" as const
export const RESET_DATA = "inform/RESET" as const
// 액션 생성함수
export const nextStep = () => ({
  type: NEXT_STEP,
})

export const prevStep = () => ({
  type: PREV_STEP,
})
// 수정 중인 정보 데이터
export const setInformation = (name: string, value: string) => ({
  type: SET_INFORMATION,
  name: name,
  value: value,
})
//수정 완료된 정보 데이터
export const setResultInfo = (resultInfo: resultType) => ({
  type: SET_RESULT_INFO,
  resultInfo: resultInfo,
})
//정보 초기화
export const resetData = () => ({
  type: RESET_DATA,
})
//액션 생성 함수 타입
export type multiStepAction =
  | ReturnType<typeof nextStep>
  | ReturnType<typeof prevStep>
  | ReturnType<typeof setInformation>
  | ReturnType<typeof setResultInfo>
  | ReturnType<typeof resetData>
