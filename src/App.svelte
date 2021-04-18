<script lang="ts">
  import { onMount } from "svelte";
  import { authUser } from "./authUser";
  import Chat from "./Chat.svelte";
  import Loader from "./components/Loader.svelte";
  import { auth } from "./firebase";
  import Login from "./Login.svelte";
  onMount(() => {
    auth.onAuthStateChanged((user) => {
      authUser.set(user);
    });
  });
</script>

{#if $authUser === false}
  <div class="content">
    <Loader />
  </div>
{:else if $authUser === null}
  <Login />
{:else}
  <Chat />
{/if}

<style>
  .content {
    height: 100vh;
    display: grid;
    place-items: center;
  }
</style>
