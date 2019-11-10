# Langdev team blog - website

## 띄우는 법

[node.js lts (현재 12.13.0)](https://nodejs.org/en/)이랑 [yarn](https://yarnpkg.com/lang/en/)을 준비합니다.

```sh
yarn
yarn dev
# 웹브라우저에서 http://localhost:8000 확인
```


## 배포하는 법

`yarn build` 명령을 실행하면 `public` 폴더가 생깁니다.
이 폴더의 내용물을 github pages에 올리면 됩니다.
