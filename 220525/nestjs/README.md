# Nest JS!

Nest는 효율적이고 확장 가능한 Node.js 서버측 애플리케이션을 구축하기 위한 프레임 워크이다.
프로그레시브 JavaScript를 사용하고 TypeScript로 빌드되고
완벽하게 지원하며(개발자가 순수 JavaScript로 코딩할 수 있음)
OOP(Pbject Oriented Programming), FP(Functional Programming),
FRP(Functional Reactive Programming) 요소를 사용할 수 있게 해준다.

Nest JS는 내부적으로 Express와 같은 강력한 HTTP서버 프레임 워크를 사용하며
선택적으로 Fastify를 사용하도록 구성 할 수도 있다.
Nest는 이러한 공통 Node.js 프레임 워크(Express / Fastify) 위에 추상화 수준을 제공하지만
API를 개발자에게 직접 노출한다.
이를 통해 개발자는 기본 플랫폼에서 사용할 수 있는 수많은 타사 모듈을 자유롭게 사용할 수 있다.

Node(및 서버 측 JavaScript)를 위한 라이브러리, 도우미 및 도구가 많이 존재 하지만 이들 중 어느 것도
아키텍처의 주요 문제를 효과적으로 해결하기 못한다.
Nest는 개발자와 팀이 고도로 테스트 가능하고 확장 가능하며 느슨하게 결합되고 유지 관리가
쉬운 애플리케이션을 만들 수 있는 즉시 사용 가능한 애플리케이션 아키텍처를 제공한다.
이 아키텍처는 Angular에서 크게 영감을 받았다.

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
