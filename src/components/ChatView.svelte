<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { authUser } from "../authUser";
  import { db } from "../firebase";

  let data = [];
  let unsub;
  onMount(async () => {
    try {
      unsub = await db
        .collection("messages")
        .orderBy("createdAt", "desc").limit(25)
        .onSnapshot((querySnapshot) => {
          if (!querySnapshot.empty) {
            let tempData = [];
            querySnapshot.forEach((doc) => {
              tempData.push({ ...doc.data(), id: doc.id });
            });
            data = tempData;
          }
        });
    } catch (error) {
      console.log(error);
    }
  });
  onDestroy(() => {
    unsub();
  });
  const formatTimestamp = (timestamp) => {
    const messageDate = new Date(timestamp);
    const hour = messageDate.getHours();
    const minutes = messageDate.getMinutes();
    return `${hour<10?'0'+hour:hour}:${minutes<10?'0'+minutes:minutes}`;
  };
</script>

<div class="box" on:scroll={(e)=>{
}}>
  {#each data as message}
    <div class="message">
      {#if message.uid === $authUser.uid}
        <div class="right">
          <p>{message.text}<span>{formatTimestamp(message.createdAt)}</span></p>
          <img src={message.userPicture} alt="" />
        </div>
      {:else}
        <div class="left">
          <img src={message.userPicture} alt="" />
          <p>{message.text}<span>{formatTimestamp(message.createdAt)}</span></p>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style lang="scss">
  .message {
    display: grid;

    .left {
      display: grid;
      grid-template-columns: 40px 1fr;
      gap: 0.5rem;
      justify-self: left;
      img {
        align-self: center;
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
      p {
        background-color: var(--primary-light);
        border-radius: 20px;
        word-break: break-all;
        min-width: 100px;
        padding-left: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-right: 4rem;
        position: relative;
        span {
          position: absolute;
          font-size: 12px;
          top: 50%;
          transform: translateY(-50%);
          right: 14px;
        }
      }
    }

    .right {
      justify-self: right;
      display: grid;
      grid-template-columns: 1fr 40px;
      gap: 0.5rem;
      img {
        align-self: center;
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
      p {
        background-color: var(--primary-light);
        border-radius: 20px;
        word-break: break-all;
        min-width: 100px;
        padding-left: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-right: 4rem;
        position: relative;
        span {
          position: absolute;
          font-size: 12px;
          top: 50%;
          transform: translateY(-50%);
          right: 14px;
        }
      }
    }
  }

  .box {
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
      0 0 0 1px rgb(10 10 10 / 2%);
    padding: 1.25rem;
    padding: 10px;
    height: 80vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
  }
  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
</style>
