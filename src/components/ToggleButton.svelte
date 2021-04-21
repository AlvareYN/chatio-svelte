<script>
  import { createEventDispatcher } from "svelte";
  export let defaultColor;
  let isWhiteMode = defaultColor === "white-mode" ? 0 : 1;
  const dispatch = createEventDispatcher();

  const onChangeBind = () => {
    console.log(isWhiteMode);
    dispatch("toggle", isWhiteMode === 0 ? "white-mode" : "black-mode");
  };
</script>

<div class="buttons">
  <div class="wrapper white-mode">
    <input
      type="radio"
      class="white"
      bind:group={isWhiteMode}
      value={0}
      on:change={onChangeBind}
    />
  </div>
  <div class="wrapper black-mode">
    <input
      type="radio"
      class="black"
      bind:group={isWhiteMode}
      value={1}
      on:change={onChangeBind}
    />
  </div>
</div>

<style lang="scss">
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper {
    padding: 0.5rem;
    border-radius: 5px;
  }
  .wrapper.black-mode {
    margin-left: 1rem;
    background-color: var(--black);
    color: var(--color);
  }
  .wrapper.white-mode {
    margin-right: 1rem;
    color: var(--black-light);
    background-color: var(--color);
  }
</style>
