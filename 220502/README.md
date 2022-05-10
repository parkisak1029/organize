# NODEJS

node_moudles = 라이브러리 or 패키지라고 부른다.
라이브러리 === 패키지
폴더안에 프로그램관련된 파일이 잔뜩 담겨져 있는것.

프레임워크
정해준 디렉토리가 있는것들.

src 내에서 작업하는것이 프레임워크

express : http서버를 편하게 만들어주는 라이브러리.

http

서버 : client에서 요청을 하면 server에서 요청한대로 응답을 준다.

client 와 server에서 동시에 사용하는 프로토콜이 http 프로토콜 이며 이것을 편하게 사용하는게 express다

require(내장객체) = return값이 존재한다.
module = nodejs 내장객체이다.
module.exports = 결과물을 저장하는 공간이다.
module.exports는 int형으로 변환할 수도 있다.

require의 역할은 내가 가지고 오고싶은 파일의 module.exports 안에 있는 객체를 가져오는것이다.

express = middleware

비동기 = 내가 원하는 시점에 함수를 실행

GET, POST = 요청 METHOD이다(request method)

res.send() = 항상 string값만 들어간다.
res.json() = 객체를 인자로 받아서 자동으로 스트링으로 변환해준다. res.send와 같다.
res.render() =
파일을 텍스트로 읽어온다.
위에 읽어온 텍스트를 전부 응답으로 보낸다.
단 텍스트로 읽어오는중 문법에 오류가 있는경우 에러를 반환하고 에러가 없다면 res.send로 반환한다.
