# 시연 영상

https://github.com/Seochangh2/multi-step/assets/71918056/fbeb50fb-d3b2-4ad1-b258-3717fe14785c

# 설명
### 구현 기능
### 1. Type Step
- Type 선택
- 유효성 검사
  -  타입 선택/비선택 판단
  -  실패 시 에러 메세지 활성화
- Prev 버튼 비활성화

### 2. Information Step
- Infromation 입력
- 유효성 검사 (required 데이터)
  - 데이터 유/무 판단
  - 입력된 값이 숫자인지 판단
  - 입력된 값이 0보다 큰지 판단
  - 입력된 값이 소수일 경우, 첫째 자리만 입력되었는지 판단
  - 실패 시 에러 메세지 활성화

### 3. Confirmation Step
- 사용자 확인
- 유효성 검사
  - 확인 창을 통한 검증
- 데이터 POST

### 4. Registered Step
- 등록 확인
----
### 상태 관리
- Redux를 통한 전역 상태 관리
  - prev, continue 버튼을 통한 페이지 전환 시에도 이전 데이터 유지를 위해 사용
  - 새로고침 시에도 데이터 유지를 위해 redux-persist, session storage 사용
  - register 성공 시 저장된 데이터 초기화
----
### 아이디어
- 페이지를 전체적으로 Header, Title, StepContent, PageButton으로 나누었음
- 사용될 데이터들을 dataContainer.ts에 저장하고 이를 기반으로 전체적인 컴포넌트 구현
- 데이터 추가/삭제 시, dataContainer.ts를 조작 하면 되도록 하여 수정에 용이하도록 구현
- 데이터 무결성을 위해 페이지 뒤로 가기, 앞으로 가기 방지
----
### UI
- styled components 사용


