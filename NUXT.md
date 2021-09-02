# Nuxt

Nuxt의 장점
Nuxt로 개발했을 때의 장점은 다음과 같습니다.

검색 엔진 최적화
초기 프로젝트 설정 비용 감소와 생산성 향상
ESLint, Prettier
라우터, 스토어 등의 라이브러리 설치 및 설정 파일 필요 X
파일 기반의 라우팅 방식. 설정 파일 자동 생성
페이지 로딩 속도와 사용자 경험 향상
브라우저가 하는 일을 서버에 나눠준다
모르면 지나칠 수 있는 코드 스플리팅이 기본으로 설정

## Nuxt 장점
- 검색 엔진 최적화 (Search Engine Optimization, SEO)
- 초기 프로젝트 설정 비용 감소와 생산성 향상
  - ESLint, Prettier
  - 라우터, 스토어 등의 라이브러리 설치 및 설정 파일 필요 X
  - **파일 기반의 라우팅 방식.** 설정 파일 자동 생성
- 페이지 로딩 속도와 사용자 경험 향상
  - 브라우저가 하는 일을 서버에 나눠준다
  - 모르면 지나칠 수 있는 코드 스플리팅이 기본으로 설정

## Nuxt 특징
- 서버 사이드 렌더링 (Server Side Rendering)
- 규격화된 폴더 구조 (layout, store, middleware, plugins 등)
- pages 폴더 기반의 자동 라우팅 설정
- 코드 스플리팅
- 비동기 데이터 요청 속성
- ES6/ES6+ 변환
- 웹팩을 비롯한 기타 설정

## Nuxt 시작하기
**1.** `npm init nuxt-app <project-name>`
   - Project name: `nuxt`
   - Programming language: `JavaScript`
   - Package manager: `Npm`
   - UI framework: `None`
   - Nuxt.js modules: `(Press <space> to select, <a> to toggle all, <i> to invert selection)`
   - Linting tools: `ESLint, Prettier`
   - Testing framework: `None`
   - Rendering mode: `Universal (SSR / SSG)`
   - Deployment target: `Server (Node.js hosting)`
   - Development tools: `jsconfig.json (Recommended for VS Code if you're not using typescript)`
   - Continuous integration: `None`
   - Version control system: `Git`

**2.** `cd <project-name>`

**3.** `npm run dev`

## Nuxt에서 eslintrc.js에 prettier 설정하기
**1.**
```
npm i -D prettier-standard   
npm i -D eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-config-prettier prettier-config-standard eslint-config-prettier-standard
```

**2.** 
`eslintrc.js` extends에  'prettier-standard' 추가

**3.** 
`eslintrc.js` rules에 prettier 설정값 추가
