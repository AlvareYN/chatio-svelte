<script lang="ts">
  import ChatInput from "./components/ChatInput.svelte";
  import ChatView from "./components/ChatView.svelte";
</script>

<div class="container">
  <ChatView />
  <ChatInput />
</div>

<style lang="scss">
  .container {
    border-radius: 12px;
    background-color: var(--black);
    margin-top: 25px;
    margin-right: 22%;
    margin-left: 22%;
  }
</style>
