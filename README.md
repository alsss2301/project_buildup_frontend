# project_buildup_frontend

https://beming-dev.github.io/react+nodejs/2021/04/28/%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-local%EC%97%90%EC%84%9C-https%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.html -> https깔때 참고

<구글로그인>
https://www.npmjs.com/package/react-google-login
https://alpoxdev.tistory.com/15

```
`Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```

원인은 컴포넌트가 이동된 후에 useState의 set함수가 변경되어서 그럼.
발생위치는 총 두개있었음.

1. Loading.js -> setTimeout()은 시간마다 계속 함수를 수행하므로 setIsHidden함수가 계속 변경되고 있었음.
   어차피 Loading창 잘 뜨는거 확인했으니까 로딩없이 바로 로그인되는걸로 설정함. 연동이후에 수정하면 돼. setTimeout()은 어차피 연동되면 다른 함수로 대체할 것임.

2. Join.js -> setError가 문제였어, try catch문에서 이미 Link to로 컴포넌트 <Login />
   으로 옮겼는데 setError(e)함수 있어서 문제 발생했던거야, CORS에러만 신경쓰려고 Link to를 삭제하고 해당 에러 일시적으로 없앴음
