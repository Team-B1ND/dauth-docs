---
sidebar_position: 2
id: AccessToken
title: AccessToken
---

# <a>AccessToken</a>
### 1. AccessToken은 뭘까?
- 서버에서 발급해주는 인증을 위한 임의의 문자열입니다
- 이 토큰을 사용하여 서비스를 요청하면 이 토큰을 검증하고, 맞다면 해당 고객의 정보를 넘겨줍니다
- 이 토큰을 발급받기 위하여 OAuth를 사용합니다
### 2. AccessToken은 어떻게 받을까?
- **도담도담 사용자라는 것을 인증받으면 된다.**
- 많은 방법이 있지만 DAuth는 code를 redirect해줍니다
- 받은 code를 가지고 access token을 발급받을 수 있습니다
### 3. AccessToken을 발급받는 방법
OAuth 2.0 에는 많은 방식이 있지만 DAuth가 구현된 방식을 기준으로 설명하겠습니다
### 
![AccessToken](/img/accesstoken/accesstoken.png)
