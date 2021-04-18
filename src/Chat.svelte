<script lang="ts">
  import ChatInput from "./components/ChatInput.svelte";
  import ChatView from "./components/ChatView.svelte";
  import { auth } from "./firebase";
  const logOut = () => {
    auth.signOut();
  };
</script>

<div class="container">
  <div class="stiky-top">
    <h1>Chatio!👓</h1>
    <div class="logout">
      <button on:click={logOut}>Log out <img src="/exit.svg" alt="" /></button>
    </div>
  </div>
  <ChatView />
  <ChatInput />
</div>

<style lang="scss">
  .stiky-top {
    display: grid;
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
  .container {
    border-radius: 12px;
    background-color: var(--black);
    margin-top: 25px;
    margin-right: 22%;
    margin-left: 22%;
  }
</style>
