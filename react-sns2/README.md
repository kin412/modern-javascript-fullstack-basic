# 한 입 크기로 잘라먹는 React.js 실전 프로젝트 - SNS편

섹션2. 스타일링 - tailwindCSS, Shadcn | 라우팅 - React Router v7
섹션3. 전역상태관리 - zustand
섹션4. 서버상태관리 - tanstack query
섹션5. 프로젝트 준비 - 프로젝트 생성, lib, 라우팅, 글로벌 레이아웃, supabase 설정
섹션6. 인증 처리 - 일반 로그인, 소셜 로그인, zustand 세션관리, 라우트 가드, 비밀번호 재설정, 회원가입 시 프로필 정보 자동 생성
섹션7. 포스트 기능 구현 - 포스트 CRUD, 무한 스크롤, 캐시 정규화, 최적화, supabase 포스트 인가 구현(RLS)
섹션8. 좋아요 기능 구현 - 좋아요 기능 구현, 낙관적 업데이트 반영, supabase like 테이블 인가 설정
섹션9. 프로필 구현 - 프로필 기능 구현, supabase 프로필 테이블 인가 설정
섹션10. 댓글 구현 - 댓글 CRUD, 대댓글, 무한 중첩댓글, 캐시 수정
섹션11. 테마 변경 기능 - 테마 변경 기능, 새로고침 시 유지
섹션12. 배포 - vercel

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
