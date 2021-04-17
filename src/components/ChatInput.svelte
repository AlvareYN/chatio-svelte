<script lang="ts">
  import { authUser } from "../authUser";
  import { db } from "../firebase";

  type Message = {
    createdAt: number;
    userPicture: string;
    text: string;
    uid: string;
  };
  let messageText: string = "";

  const sendMessage = (event) => {
    event.preventDefault();
    if (messageText.length > 0) {
      let messageObj: Message = {
        createdAt: new Date().getTime(),
        userPicture: $authUser.photoURL ?? "/no_image.jpg",
        text: messageText,
        uid: $authUser.uid,
      };
      try {
        db.collection("messages").add(messageObj);
        messageText = "";
      } catch (error) {
        console.log(error);
      }
    }
  };

</script>

<form class="flex" on:submit={sendMessage}>
  <input type="text" bind:value={messageText} />
  <button type="submit">
    <img src="/send.svg" alt="" />
  </button>
</form>

<style lang="scss">
  input {
    font-size: 20px;
    color: var(--color);
    border: 0;
    background-color: var(--black-light);
    outline: none;
    height: 40px;
    border-bottom-left-radius: 12px;
    padding-left: 1rem;
  }
  button {
    background-color: hsla(0, 0%, 0%, 0);
    border: 0;
    outline: none;
    cursor: pointer;
    &:active {
      img {
        height: 25px;
        width: 25px;
      }
    }
  }
  .flex {

    background-color: var(--black);
    all: unset;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 40px;
  }
</style>
