[Langdev Team Blog]
========
[`posts/`] 디렉토리에 `YYYY-MM-DD.md` 형식의 마크다운 파일을 만들고 푸쉬하면,
자동으로 새 글이 [blog.langdev.org]에 배포됩니다.

### 개발하는 법
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

[Langdev Team Blog]: https://blog.langdev.org
[`posts/`]: posts/
[blog.langdev.org]: https://blog.langdev.org
[Node.js]: https://nodejs.org
[Yarn]: https://yarnpkg.com
