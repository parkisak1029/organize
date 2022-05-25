# Nest.Js 설치

npm install -g @nestjs/cli
위에서 -g가 빠지면 실행안됨
설치가 완료되면
nest new project-name(뒤에 project-name은 폴더명이 된다.)명령어를 터미널에 치면 된다.

# .eslintrc.js

개발자들이 특정한 규칙을 가지고 코드를 깔끔하게 짤 수 있게 도와주는 라이브러리
타입스크립트를 쓰는 가이드 라인 제시, 문법에 오류가 나면 알려주는 역할

# .prettierrc

주로 코드 형식을 맞추는데 사용한다. 작은 따옴표(')를 사용할지 큰 따옴표(")를 사용할지,
Indent 값을 2로 줄지 4로 줄지등등, 에러 찾는 것이 아닌 코드 포맷터 역할

# nest-cli.json

nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일

# tsconfig.json

어떻게 타입스크립트를 컴파일 할지 설정

# tsconfig.build.json

tsconfig.json의 연장선상 파일이며, build를 할 때 필요한 설정들에서는 빌드할 때 필요 없는 파일을 명시

# Board모듈 생성하기

nest g module board
nest g controller board --no-spec(no spec은 test를 위한 소스코드 생성 안하는 것을 뜻함)

# CLI로 명령어 입력시 Controller 만드는 순서

cli : board(user, auth ...etc) 폴더 찾기 -> 폴더 안에 controller 파일 생성 ->
폴더 안에 module 파일 찾기 -> module 파일 안에다가 contoller 넣어주기
