<script>
  import NavBar from "$lib/components/NavBar.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { userEmail, userData, userMatch } from "../../stores.js";

  let usersData = [];
 let match2id
  let matched = false;
  // @ts-ignore
  let match1 = $userData.username
  let match2

  async function getUsersData() {
    await fetch("http://localhost:3001/acc/get")
      .then((response) => response.json())
      .then((data) => (usersData = data));
      console.log(usersData);

  }
onMount(() => {
  getUsersData();
 
  console.log(usersData);
});


function match () {
   match2id =getRandomInt(0, usersData.length-1);
  if(usersData[match2id].username != match1  ){
    match2 = usersData[match2id].username;
  } else match();
   console.log(match2);
   matched = true;
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function submitMatch () {
$userMatch = match2;
  let reqData = {
    user1: match1,
    user2: match2
  };
 fetch("http://localhost:3001/match/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // You may need to include additional headers depending on your API requirements
          },
          // mode: "cors", // This enables CORS
          body: JSON.stringify(reqData),
        });
}
 



</script>

<svelte:head>
  <title>Match Page</title>
  <meta name="description" content="User Profile Page" />
</svelte:head>

<header>
  <NavBar />

  <div
    class="chats fixed def ml-2 mt-2 grid text-[#3730A3]"
    style="height:800px; width: 300px; top:auto;   transition: 0.5s; z-index: 3; grid-template-rows: 35px; grid-auto-flow: row; grid-auto-rows: 70px; ;"
  >
    <div
      class="text-2xl border-b-2 w-full font-bold pl-2"
      style="border-color: #3730A3;"
    >
      Chats
    </div>
    <div class="grid border-b-2" style="grid-template-columns: 80px auto;">
      <div class="grid">
        <img
          class="border-2 rounded-[50%] cover m-auto ml-2"
          src="https://cdn.pixabay.com/photo/2018/10/23/10/29/cat-3767494_640.jpg"
          alt="pfp"
          style="max-width: 60px; height: 60px;"
        />
      </div>
      <div class="grid" style="grid-template-rows: 15px 30px;">
        <div class="font-bold mt-2" style="">Cattingsohn - Match</div>
        <div class="ml-2 mt-6">Yo, whats good cuh</div>
      </div>
    </div>
    <!-- <div
    class="chatContainer def absolute ml-2 mt-2"
    style="height:500px; width: 50px; top:auto; z-index: 4;"
  >
    sssssss
  </div> -->
    <!-- </div>
   <div
    class="fixed def ml-2 mt-2 grid text-[#3730A3]"
    style="height:800px; width: 300px; top:auto; left:310px; z-index: 3; grid-template-rows: 35px; grid-auto-flow: row; grid-auto-rows: 90px;"
  > -->
  </div>
</header>

<!-- shadow-[0_8px_30px_rgb(0,0,0,0.12)] -->
<div class=" h-screen" style="background-color: #f1f4f9;  z-index: 2;">
  <!-- top div -->
  <!-- <div
    class="top bg-white text-4xl text-center align-middle border-b-2 drop-shadow-sm shadow-blue-500/20 font-bold text-[#3730A3] grid place-items-center items-center justify-center"
    style="min-height:200px;"
  >
    <div class="grid place-items-center items-center justify-center">
      Congratulations! <br /> You've found a match!
    </div>
  </div> -->

  <!-- bot div -->
  <div
    style="display: grid; grid-template-columns: 3.75fr 1.1fr; max-width: 73%; margin: 10px auto; "
  >
  {#if !matched}
 <div class="left def m-2 p-20 text-4xl text-center text-[#3730A3] font-bold grid" style="grid-template-rows: 60px 350px auto;">
  Click the Roll button to get a match!
  </div>  {:else}
    <div class="left def m-2 grid" style="grid-template-rows: 60px 350px auto;">
      <div class="text-4xl text-center text-[#3730A3] font-bold mt-3">
        Your match
      </div>

      <div
        class=""
        style="  display: grid;
    grid-template-columns: repeat(180, calc(100% / 180));
    grid-template-rows: repeat(100, calc(100% / 100));"
      >
      
        <img
          class="pfp"
          src={usersData[match2id].pfp_url} 
          alt="pfp"
          style="min-width: 180px; min-height: 180px;"
        />
        <div class="name">{usersData[match2id].username}</div>
        <img
          class="banner"
          src={usersData[match2id].bg_url} 
        />
      </div>

      <div class="border-t-2 min-h-[300px] text-[#3730A3]">
        <div style="width: 80%; margin: auto;">
          <h1 class="text-xl font-bold m-4">About Me</h1>
          <p class="font-semibold m-5">
           {usersData[match2id].description}
          </p>
        </div>
      </div>
    </div>
  {/if}
    

    <div
      class="right def min-h-[590px] h-[590px] m-2 grid text-2xl text-center text-[#3730A3] font-bold"
      style="width: 100%; grid-template-rows: 60px auto auto auto; min-width: 310px;"
    >
      <div class="mt-3 border-b-2">Cattingsohn's Interests</div>
      <div
        class="min-h-[150px] grid border-b-2"
        style="grid-template-rows: 12px auto;"
      >
        <div class="text-xl text-left ml-5 mt-1">Liked</div>
          <div class="mt-5">Coming soon!</div>
      </div>
      <div
        class="min-h-[150px] grid border-b-2"
        style="grid-template-rows: 12px auto;"
      >
        <div class="text-xl text-left ml-5 mt-1 ">Disliked</div>
        <div class="mt-5">Coming soon!</div>
        
      </div>
      <div class="grid" style="grid-template-rows: auto auto;">
        <button
          class="mx-3 mt-2 def"
          style="background-color: #3730A3; border-color: #3730A3; color: white;"
          on:click={match}
        >
          Roll</button
        >
        <button
          class="mx-3 mt-2 mb-2 def"
          style="background-color: #3730A3; border-color: #3730A3; color: white;"
          on:click={submitMatch}
        >
          Start Chat</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .chats {
    left:-290px;
  }
  .chats:hover {
    left: 0px;
  }
  .name {
    grid-row: 75;
    grid-column: 45;
    font-size: 2rem;
    font-weight: bold;
    color: #3730a3;
    white-space: nowrap;
    z-index: 1;
  }
  .banner {
    grid-row: 1 / 75;
    grid-column: 1 / 182;
    width: 95%;
    height: 90%;
    object-fit: cover;
    border-radius: 8px;
    margin: auto;
  }
  .pfp {
    grid-row: 48;
    grid-column: 10 / 13;
    border-radius: 50%;

    border: 8px solid white;
    z-index: 1;
    /* margin-bottom: 5%; */
  }
  .def {
    --tw-bg-opacity: 1;
    border-radius: 0.5rem /* 8px */;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    border-width: 2px;
    --tw-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
      var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
      var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    --tw-shadow-color: rgb(59 130 246 / 0.2);
    --tw-shadow: var(--tw-shadow-colored);
  }
</style>