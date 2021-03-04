# JAJA-SPANISH <깔깔스페인어>

깔깔스페인어는 세계 21개국에서 약 4억명이 사용하는 스페인어를 원어민 선생님들과 1:1 화상으로 배우는 교육 플랫폼 입니다.

![깔스시연영상1](https://user-images.githubusercontent.com/39975889/110023351-718ff100-7d70-11eb-90c0-13c9e3e4773c.gif)

[깔깔스페인어로 바로가기](https://bit.ly/3jkKfBZ)

## DEV

### Folder Structure
![폴더1](https://user-images.githubusercontent.com/39975889/110019657-10661e80-7d6c-11eb-9c20-4d18f3c0f9db.png)

![폴더2](https://user-images.githubusercontent.com/39975889/110019688-16f49600-7d6c-11eb-841e-3f69dff0c676.png)


#### `components`

Presentational Components로 Atomic design을 따른다.

#### `containers`

Container Components로 주로 로직, data fetching을 담당한다.

#### `hooks`

Hook을 만들어 이곳에 보관하고 사용한다.
  - useGetUserObject: 사용자 정보를 가져온다.
  - useLoggedInCheck: 사용자의 로그인 여부를 알려준다.
  - useGetProfesObject: 강사들의 정보를 가져온다.
  - useGetCourseObject: 수업 정보를 가져온다. 
  - useGetPostponedClass: 연기신청된 수업 정보를 가져온다.
  - useToggleCommunity: 페이지 상태가 공지사항인지 FAQ인지 알려준다.  

#### `pages`

최종 페이지 뷰

#### `App.tsx`

이곳에서 라우팅이 일어난다.

### Commit Rule

#### Commit messages

-   "[Emoji] Messages "

#### Emojis

-   :package: [Add or update packages]
-   :sparkles: [Introduce new features]
-   :hammer: [Add or update development scripts]
-   :bug: [Fix a bug]
-   :nail_care: [Update the UI and styles, CSS]
-   :rocket: [Deploy stuff]
-   :memo: [Write docs]
-   :white_check_mark: [Add tests]
-   :art: [Improve structure]


