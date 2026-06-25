# Common Components

Admin(PC)과 Service(Mobile) **양쪽 모두**에서 동일하게 사용하는 컴포넌트입니다.

## 포함 예시

Admin과 Service에서 모양/동작이 거의 같은 컴포넌트:

- Avatar
- Badge
- Chip
- Tag
- Divider
- Loading Spinner
- 기타 공통 시각 요소

## 포함 기준

다음 조건을 **모두** 만족해야 common에 둡니다:
- [ ] 양쪽 플랫폼에서 동일한 디자인
- [ ] 양쪽 플랫폼에서 동일한 variant
- [ ] 플랫폼별 분기 로직이 없음

하나라도 다르면 `/service` 또는 `/admin`에 분리합니다.

## 파일 구조

각 컴포넌트는 하나의 `.md` 파일로 정의:
- `badge.md` — Badge 컴포넌트 가이드
- `avatar.md` — Avatar 컴포넌트 가이드
- ...
