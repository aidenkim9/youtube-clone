# 🎬 YouTube Clone Project

> Vite + React + TypeScript + styled-components 기반으로 제작한 YouTube 클론 프로젝트입니다.

<br />

## 📸 프로젝트 미리보기

![YouTube Clone Screenshot](./screenshot.png)

<br />

## 🚀 기술 스택

- **React 19**
- **TypeScript**
- **Vite**
- **styled-components**
- **YouTube Data API v3**
- **Moment.js** (날짜 포맷팅)

<br />

## 🧩 주요 기능

- 🔎 카테고리별 인기 영상 목록 조회
- 🎥 영상 클릭 시 디테일 페이지 이동 및 재생
- 🗨️ 영상 정보(제목, 채널명, 조회수, 좋아요) 표시
- 📺 채널 정보 및 구독자 수 표시
- 📝 영상 댓글 목록 출력
- 📱 **반응형 디자인** 적용 (PC/모바일 모두 대응)

<br />

## 📂 폴더 구조

src/
├── Api/ # API 호출 함수 관리
├── Components/ # UI 컴포넌트
├── Pages/ # 라우팅되는 주요 페이지
├── Styles/ # styled-components 스타일 파일
├── Types/ # 타입 정의 파일
├── assets/ # 이미지 및 정적 파일
├── data.ts # 상수 데이터 (API KEY 등)
└── main.tsx # 앱 진입점

## 💡 트러블 슈팅 / 기술적 포인트

YouTube API 쿼터 초과 이슈에 대응하여 오류처리 및 fallback UX를 고려함

fetch API를 별도 모듈로 분리하여 유지보수성을 높임

타입 안정성을 위해 모든 데이터 통신에 TypeScript 인터페이스 적용

비동기 데이터 fetching 시 loading 상태를 관리하여 사용자 경험 향상

<br />

## 🎯 향후 개선 계획

Tailwind CSS를 적용한 스타일링 버전 추가

Next.js 기반 SSR/SSG 버전으로 확장

React Query를 통한 API 캐싱 및 상태 관리 최적화

Skeleton UI 추가하여 로딩 경험 개선

<br />
