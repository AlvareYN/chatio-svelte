<script lang="ts">
  import { auth } from "../firebase";
  import { getDefaultColorScheme } from "../utils";
  import ToggleButton from "./ToggleButton.svelte";

  const changeColorScheme = () => {
    const colorScheme = localStorage.getItem("default-color");
    if (colorScheme === "dark-mode") {
      localStorage.setItem("default-color", "white-mode");
      let bodyElement = document.getElementsByTagName("body")[0];
      bodyElement.classList.remove("dark-mode");
      bodyElement.classList.add("white-mode");
    } else {
      localStorage.setItem("default-color", "dark-mode");
      let bodyElement = document.getElementsByTagName("body")[0];
      bodyElement.classList.remove("white-mode");
      bodyElement.classList.add("dark-mode");
    }
  };
  const logOut = () => {
    auth.signOut();
  };
</script>

<div class="container">
  <div class="stiky-top">
    <ToggleButton
      defaultColor={getDefaultColorScheme()}
      on:toggle={changeColorScheme}
    />
    <h1>Chatio!👓</h1>
    <div class="logout">
      <button on:click={logOut}>Log out <img src="/exit.svg" alt="" /></button>
    </div>
  </div>
  <slot />
</div>

<style lang="scss">
  .stiky-top {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    position: relative;
    .logout {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1rem;
      display: grid;
      place-content: center;
      button {
        padding: 0.6rem;
        font-size: 16px;
        border: 0;
        border-radius: 12px;
        color: var(--color);
        background-color: var(--primary);
        display: grid;
        place-content: center;
        grid-template-columns: 1fr 16px;
        gap: 0.4rem;
        outline: none;
        cursor: pointer;
        img {
          height: 16px;
          width: 16px;
        }
      }
    }

    h1 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      text-align: center;
    }
  }
  @media only screen and (min-width:1000px){
    .container {
    border-radius: 12px;
    margin-top: 25px;
    margin-right: 22%!important;
    margin-left: 22%!important;
  }
  }
  @media only screen and (min-width:730px){
    .container {
    border-radius: 12px;
    margin-top: 25px;
    margin-right: 10%!important;
    margin-left: 10%!important;
  }
  }
  .container {
    border-radius: 12px;
    margin-top: 25px;
    margin-right: 3%;
    margin-left: 3%;
  }
</style>
