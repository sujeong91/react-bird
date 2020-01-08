# react-bird
트위터, 페이스북처럼 글을 올리고 댓글을 다는 sns 채널을 만듦.<br>
react로 redux, axios, next 작업을 연습할 repository

## 실행
__in terminal__<br>
git clone [url주소] > cd react-bird > npm run dev

## 화면 구상
![layout](https://user-images.githubusercontent.com/33299977/71651520-9e5a0a00-2d61-11ea-9d06-6116ab06ede7.jpg)

## router
/ : 메인화면. post 보는 곳<br>
/profile : 닉네임 변경하기. 팔로잉, 팔로워 목록보기.<br>
/signup : 회원 가입하기

## spec
### code style
- eslint airbnb 버전 적용.
### rendering & routing
- next.js로 라우팅(나중에 SSR)
### global variable
- redux
- redux-saga
### styling
- antd
- styled-component
