<script lang="ts">
  import { onMount } from "svelte";
  import { authUser } from "./authUser";
  import Chat from "./Chat.svelte";
  import { auth } from "./firebase";
  import Login from "./Login.svelte";
  $:console.log($authUser)
  onMount(() => {
    auth.onAuthStateChanged((user) => {
      authUser.set(user);
    });
  });
</script>


{#if $authUser === false}
  loading ...
{:else if $authUser === null}
  <Login />
{:else}
  <Chat />
{/if}
