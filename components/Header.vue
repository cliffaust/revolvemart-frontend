<template>
  <div class="header">
    <img class="logo" src="~/assets/logo/revolvemart-LOGO-B3.png" alt="Logo" />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.header {
  //background-color: $primary-bgcolor-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.5rem;

  .logo {
    width: 65px;
    height: 40px;
    object-fit: cover;
    cursor: pointer;
  }

  .sign-in-btn {
    padding: 1rem 2rem;
    background-color: transparent;
    border: 1px solid $color-white;
    color: $color-white;
    font-size: 1.6rem;
    font-weight: 700;
    transition: 0.2s ease;
    border-radius: 0.6rem;
    cursor: pointer;

    &:hover {
      background-color: $color-white;
      color: $primary-text-color;
    }
  }
}

.user-profile-options {
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  position: absolute;
  z-index: 20;
  box-shadow: 0px 25px 24px -2px rgba(0, 0, 0, 0.15);

  &::after {
    content: '';
    border-left: 1.3rem solid transparent;
    border-right: 1.3rem solid transparent;
    border-top: 1.3rem solid transparent;
    border-bottom: 1.3rem solid #fff;
    position: absolute;
    top: -10%;
    right: 4px;
    transform: translateX(-50%);
  }

  .profile,
  .my-home,
  .account-setting,
  .signout {
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.3rem 0.8rem;
    transition: 0.2s ease;
    cursor: pointer;
    z-index: 20;

    &:hover {
      background-color: $dark-gray;
    }
  }

  .account-setting {
    margin-bottom: 1rem;
  }

  .signout {
    position: relative;
    margin-top: 1rem;
    &::before {
      content: '';
      width: 100%;
      height: 1px;
      background-color: $dark-gray;
      position: absolute;
      left: 0;
      right: 0;
      top: -10px;
    }
  }
}
</style>
