<template>
  <nav>
    <img src="/assets/logo.svg" alt="logo" class="nav-logo" />
    <div class="nav-links">
      <router-link to="/"
        ><img src="/assets/icon-nav-home.svg" alt="icon home"
      /></router-link>
      <router-link to="/movies"
        ><img src="/assets/icon-nav-movies.svg" alt="icon movies"
      /></router-link>
      <router-link to="/series"
        ><img src="/assets/icon-nav-tv-series.svg" alt="icon tv series"
      /></router-link>
      <router-link to="/bookmark"
        ><img src="/assets/icon-nav-bookmark.svg" alt="icon bookmark"
      /></router-link>
    </div>
    <img src="/assets/image-avatar.png" alt="Avatar" class="image-avatar" />
  </nav>
  <div class="global-container">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("style/reset.css");
@import url("https://fonts.googleapis.com/css?family=Outfit:200,300,400,500,600,700,800,900");
#app {
  width: 100vw;
  font-family: Outfit, sans-serif;
  color: #fff;
  min-height: 100vh;
  background-color: #10141e;
  padding-top: 30px;
  padding-bottom: 40px;
}

nav {
  position: fixed;
  top: 30px;
  left: 20px;
  background-color: #161d2f;
  width: 70px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 35px 0 32px;

  .nav-logo {
    width: 32px;
    height: 26px;
  }

  .nav-links {
    margin-top: 75px;
    display: flex;
    flex-direction: column;

    a {
      margin-bottom: 40px;
    }

    a:hover {
      filter: brightness(0) invert(1);
    }

    a.router-link-exact-active {
      filter: brightness(0) invert(1);
    }
  }

  .image-avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    margin-top: auto;
    border-radius: 50%;
  }
}

.global-container {
  width: 90%;
  margin-left: 90px;
  padding-left: 36px;
  margin-bottom: 50px;
}

h1 {
  font-style: normal;
  font-weight: 200;
  font-size: clamp(25px, 3vw, 32px);
  line-height: 40px;
  letter-spacing: -0.5px;
}

@media (max-width: 800px) {
  nav {
    position: absolute;
    top: 23px;
    left: 0;
    width: 95vw;
    height: 70px;
    margin: 0 2vw;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0px 24px;

    .nav-links {
      width: 50%;
      margin-top: 0px;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        margin-bottom: 0;
      }
    }

    .image-avatar {
      margin-top: 0;
    }
  }
  .global-container {
    width: 100%;
    margin-left: 0px;
    padding: 0 3vw;
  }
}

@media (max-width: 400px) {
  nav {
    top: 0px;
    width: 100%;
    margin: 0;
    padding: 0px 15px;
    border-radius: 0px;

    .nav-logo {
      width: 25px;
      height: 20px;
    }

    .nav-links {
      img {
        width: 16px;
        height: 16px;
      }
    }

    .image-avatar {
      width: 24px;
      height: 24px;
    }
  }
  .global-container {
    padding: 0 2vw;
  }
}
</style>
