<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <span class="icon is-large">
            <img src="~static/coffee.png" alt="">
          </span>
        </nuxt-link>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <nuxt-link to="/profile" class="navbar-item">인적 사항</nuxt-link>
          <nuxt-link to="/career" class="navbar-item">경력</nuxt-link>
          <nuxt-link to="/advantage" class="navbar-item">장점</nuxt-link>
          <nuxt-link to="/dream" class="navbar-item">목표</nuxt-link>
          <nuxt-link to="/have" class="navbar-item">수상내역 및 자격증</nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt/>
    <footer class="footer has-text-centered">
      <p> 모든 저작권은 김형준에게 있음</p>
    </footer>
  </div>

</template>
