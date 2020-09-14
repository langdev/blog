# Langdev team blog - website
## 띄우는 법
[Node.js]와 [Yarn]을 준비합니다.

```bash
# 라이브러리 설치
yarn
# 개발서버 띄우기, http://localhost:8000 를 확인하세요
yarn dev

# 타입체크, 코드 포맷 체크
yarn test
# 코드 포맷 수정
yarn fmt
```

## 배포하는 법
```bash
yarn build
# 생성된 'public/' 디렉토리를 gh-pages 브랜치에 배포하면 됨
```

[Node.js]: https://nodejs.org
[Yarn]: https://yarnpkg.com
