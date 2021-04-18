<script lang="ts">
  import { authUser } from "./authUser";
  import { auth, authClass } from "./firebase";

  const signIn = async () => {
    try {
      const provider = new authClass.GoogleAuthProvider();
      const authUserInfo = await auth.signInWithPopup(provider);
      authUser.set(authUserInfo.user);
    } catch (error) {
      console.log(error);
      authUser.set(null);
    }
  };
</script>

<div class="content">
  <div class="box">
    <button class="googleButton" on:click={signIn}>Sign in with Google</button>
  </div>
</div>

<style>
  .content {
    height: 100vh;
    display: grid;
    place-items: center;
  }
  .box {
    border-radius: 12px;
    background-color: var(--black);
    display: grid;
    place-items: center;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
      0 0 0 1px rgb(10 10 10 / 2%);
    padding: 1.25rem;
    padding: 10px;
  }
</style>
