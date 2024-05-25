# hoonie-log 📝

🔗 [hoonie-log 바로가기](https://hoonie-log.vercel.app/)

hoonie-log는 [Next.js](https://nextjs.org/)와 [Supabase](https://supabase.com/)로 빚은 블로그입니다.

# 개발 기간

!자세한 개발 기간은 추후 업데이트 예정입니다.
`2024. 5. 3. ~ 6. 8.`

# 목표

- 텍스트 에디터 기능을 포함한 나만의 블로그 만들기
- 전자책을 읽는다는 느낌을 받을 수 있는 디자인 구현하기
- 대시보드를 통해 관리자가 글을 작성, 수정, 삭제할 수 있도록 하기

# 기능

## 👥 공통 기능

- 블로그에 작성된 된 글을 읽을 수 있습니다.
- 댓글을 남길 수 있습니다.
- 원하는 글을 검색할 수 있습니다.
- 라이트, 다크 및 사용자 기기에서 사용중인 테마를 적용할 수 있습니다.

## 🧑🏻‍💼 관리자 기능

- OAuth 2.0을 사용해 대시보드에 접근할 수 있습니다.
- 대시보드에서 글을 작성하고, 수정하고, 삭제할 수 있습니다.
- 블로그 통계를 확인할 수 있습니다.

# 브랜치 전략과 커밋 컨벤션

## 브랜치 전략

!브랜치 전략은 추후 업데이트 예정입니다.

Git-Flow

## 커밋 컨벤션

[Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/#%ea%b7%9c%ea%b2%a9)를 기반으로 하는 커밋 컨벤션을 적용했습니다.

| 타입     | 설명                                                              |
| -------- | ----------------------------------------------------------------- |
| chore    | 빌드 업무 수정, 패키지 매니저 수정, production code와 무관한 부분 |
| comment  | 주석 추가 및 빈경                                                 |
| design   | CSS 등 사용자 UI 변경                                             |
| docs     | 문서 수정                                                         |
| feat     | 새로운 기능 추가                                                  |
| fix      | 버그 수정                                                         |
| refactor | 코드 리팩토링                                                     |
| remove   | 파일, 폴더 삭제                                                   |
| rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만 하는 경우             |
| revert   | 이전 커밋으로 되돌리는 작업                                       |
| style    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우                 |
| test     | 테스트 코드, 리팩토링 테스트 코드 추가                            |

<br/>

# 개발 환경

<img src="https://img.shields.io/badge/Next.js-181717?style=flat-square&logo=Next.js&logoColor=#000000"/><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=ffffff"/><img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=TailwindCSS&logoColor=ffffff"/><img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=PostCSS&logoColor=ffffff"/><img src="https://img.shields.io/badge/Supabase-000000?style=flat-square&logo=Supabase&logoColor=#3FCF8E"/>
<br/>
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=000000"/><img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=ffffff"/><img src="https://img.shields.io/badge/Commitlint-000000?style=flat-square&logo=Commitlint&logoColor=#000000"/><img src="https://img.shields.io/badge/GitHub-000000?style=flat-square&logo=GitHub&logoColor=#000000"/>

!개발 환경은 업데이트 예정입니다.

# 폴더 구조

!폴더 구조는 업데이트 예정입니다

```
hoonie-log
├─ .eslintrc.json
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ apple-icon.png
│  ├─ favicon.ico
│  ├─ fonts
│  │  ├─ RIDIBatang.otf
│  │  └─ pretendard_variable.woff2
│  ├─ icons
│  │  ├─ icon-arrow_up.svg
│  │  ├─ icon-bars.svg
│  │  ├─ icon-calendar.svg
│  │  ├─ icon-clock.svg
│  │  ├─ icon-github.svg
│  │  ├─ icon-linkedin.svg
│  │  ├─ icon-mail.svg
│  │  ├─ icon-share.svg
│  │  ├─ icon-x.svg
│  │  └─ logo.png
│  ├─ opengraph-image.png
│  └─ profile.jpg
├─ src
│  ├─ app
│  │  ├─ blog
│  │  │  ├─ [slug]
│  │  │  │  └─ page.tsx
│  │  │  └─ page.tsx
│  │  ├─ components
│  │  │  ├─ Calender.tsx
│  │  │  ├─ Clock.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Giscus.tsx
│  │  │  ├─ Github.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ Linkedin.tsx
│  │  │  ├─ Mail.tsx
│  │  │  ├─ PostAbstarctItem.tsx
│  │  │  ├─ PostAbstarctList.tsx
│  │  │  ├─ PostBody.tsx
│  │  │  └─ PostHeader.tsx
│  │  ├─ craft
│  │  │  ├─ [slug]
│  │  │  │  └─ page.tsx
│  │  │  └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ not-found.tsx
│  │  └─ page.tsx
│  ├─ interfaces
│  │  └─ post.ts
│  ├─ lib
│  │  ├─ api.ts
│  │  └─ constants.ts
│  └─ posts
│     ├─ blog
│     │  ├─ content.md
│     │  └─ test-1.md
│     └─ craft
│        └─ content4.md
├─ tailwind.config.ts
└─ tsconfig.json

```

# 참고한 자료

🔗 [Next.js Portfolio with Blog](https://vercel.com/templates/next.js/nextjs-portfolio)<br/>
🔗 [리디바탕체](https://ridicorp.com/ridibatang/)<br/>
🔗 [Pretendard Variable](https://cactus.tistory.com/306)
