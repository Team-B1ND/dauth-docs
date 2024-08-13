---
id: UseDAuthAndroid
title: DAuth서비스 이용방법 - Android
sidebar_position: 2
---

# <a>DAuth서비스 이용방법</a>

:::info
Android버전 추후 업데이트 예정
:::
<!-- 
## 1. 프로젝트 설정

`setting.gradle`에 아래 코드를 추가해주세요.

```javascript
dependencyResolutionManagement {
    ...
    repositories {
        ...
        maven { url "https://jitpack.io" } // add this
    }
}
```

그리고 Module 단위의 `build.gralde`에 다음 코드를 추가해주세요.

```javascript
dependencies {
	implementation 'com.github.Team-B1ND:dauth-android:1.0.5'
}
```

## 2. 사용방식

### DAuth 세팅

`settingDAuth()` 함수의 인자로 발급받은 **clientId**, **clientSecret**, **redirectUrl** 을 입력해주세요.  
이 때, `settingDAuth()` 함수는 **Activity**의 `onCreate()` 혹은 `onStart()` 내부에서 호출해야 합니다.

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    settingDAuth(clientId, clientSecret, redirectUrl)
    // 발급받은 clienId, clientSecret, redirectUrl을 각각 대입
}
```

### 토큰 발급받기

`loginWithDodam()` 의 첫 번째 인자로 context를 입력하고, 두 번째, 세 번째 인자로 각각 성공, 실패에 대한 로직을 처리해 주세요.  
성공 시 `accessToken`, `refreshToken` 를 프로퍼티로 가진 `TokenResponse` 를 반환해주고, 실패 시 `Throwable` 을 반환합니다.

```kotlin
loginWithDodam(this, {
    // 성공 시 처리할 로직을 입력해 주세요.
    Toast.makeText(
	this,
	"${it.accessToken}, ${it.refreshToken}",
	Toast.LENGTH_SHORT
    ).show()
}, {
    // 실패 시 처리할 로직을 입력해 주세요.
    Toast.makeText(this, it.message, Toast.LENGTH_SHORT).show()
})

```

### 유저 정보 가져오기

`getUserInfo()` 의 첫 번째 인자로 `accessToken` 을 입력하고, 두 번째, 세 번째 인자로 각각 성공, 실패에 대한 로직을 처리해 주세요.  
성공 시 유저 정보를 가진 `UserResponse` 를 반환해주고, 실패 시 `Throwable` 을 반환합니다.

```kotlin
getUserInfo(accessToken, {
    // 성공 시 처리할 로직을 입력해 주세요.
    Toast.makeText(
	this,
	"${it.grade}, ${it.room}, ${it.number}",
	Toast.LENGTH_SHORT
    ).show()
}, {
    // 실패 시 처리할 로직을 입력해 주세요.
    Toast.makeText(this, it.message, Toast.LENGTH_SHORT).show()
})

```

### 토큰 재발급 받기

`getRefreshToken()` 의 첫 번째 인자로 `refreshToken`, 두 번째 인자로 `clientId`를 입력하고  
세 번째, 네 번째 인자로 각각 성공, 실패에 대한 로직을 처리해 주세요.
성공 시 `accessToken` 을 프로퍼티로 가진 `RefreshTokenResponse` 를 반환합니다.

```kotlin
getRefreshToken(refreshToken, clientId, {
    // 성공 시 처리할 로직을 입력해 주세요.
    Toast.makeText(this, it.accessToken, Toast.LENGTH_SHORT).show()
}, {
    // 실패 시 처리할 로직을 입력해 주세요.
    Toast.makeText(this, it.message, Toast.LENGTH_SHORT).show()
})

```

### 코드 가져오기

`getCode()` 의 첫 번째 인자로 `context` 를 입력하고, 두 번째, 세 번째 인자로 가각 성공, 실패에 대한 로직을 처리해 주세요.  
성공 시 String 타입의 `code` 를 반환합니다.

```kotlin
getCode(this, {
    // 성공 시 처리할 로직을 입력해 주세요.
    Toast.makeText(this, it, Toast.LENGTH_SHORT).show()
}, {
    // 실패 시 처리할 로직을 입력해 주세요.
    Toast.makeText(this, it.message, Toast.LENGTH_SHORT).show()
})

``` -->
