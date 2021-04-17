<script lang="ts">
  import { authUser } from "./authUser";
  import { auth, authClass } from "./firebase";


  const signIn = async () => {
    try {
      const provider = new authClass.GoogleAuthProvider();
      const user = await auth.signInWithPopup(provider);
      authUser.set(user);
    } catch (error) {
      console.log(error);
      authUser.set(null);
    }
  };
</script>

<button class="googleButton" on:click={signIn}>Sign in with Google</button>

<style>
</style>
