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

###

type script는 javascript에서 사용할 수 없는 private이나 public을 사용할 수 있다.(타입 지정)

접근제한자(public, private)을 생성자(constructor) 파라미터에 선언하면 접근 제한자가
사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.
