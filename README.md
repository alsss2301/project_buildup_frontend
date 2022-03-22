# project_buildup_frontend

https://beming-dev.github.io/react+nodejs/2021/04/28/%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-local%EC%97%90%EC%84%9C-https%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.html -> https깔때 참고

<구글로그인>
https://www.npmjs.com/package/react-google-login
https://alpoxdev.tistory.com/15

원인은 컴포넌트가 이동된 후에 useState의 set함수가 변경되어서 그럼.
발생위치는 총 두개있었음.

1. Loading.js -> setTimeout()은 시간마다 계속 함수를 수행하므로 setIsHidden함수가 계속 변경되고 있었음.
   어차피 Loading창 잘 뜨는거 확인했으니까 로딩없이 바로 로그인되는걸로 설정함. 연동이후에 수정하면 돼

2. Join.js -> setError가 문제였어, try catch문에서 이미 Link to로 컴포넌트 <Login />으로 옮겼는데 setError(e)함수 있어서 문제 발생했던거야, setError없애고 alert로 직접 경고창 띄우는 방식으로 변경했더니 해결 (편집됨)

아이고 또안되네, Link to자체를 쓰면 try/catch문의 모든 것들이 에러의 원인이 되는듯
Link to 말고 다른방법찾아서 코드짜야해. 이거 CORS원인일 수도 있을 것 같은게
링크를 타고 이미 컴포넌트를 옮겼다.
setData로 데이터를 바꾸려는 시도를한다.
여기서 충돌 발생해서 전송 자체가 안된거일수도 있을듯
이거먼저 해결해야할듯 해달면접 갔다올게
