<script>
  import NavBar from "$lib/components/NavBar.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  
  export let data;
  console.log(data);
</script>

<svelte:head>
  <title>User Profile</title>
  <meta name="description" content="User Profile Page" />
</svelte:head>

<header>
  <NavBar />
</header>
<!-- shadow-[0_8px_30px_rgb(0,0,0,0.12)] -->
<body class="bg-white h-screen">
  <div style="  margin-left: auto; margin-right: auto; ">
    <div
      class="bg-white w-full z-10 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-b-2"
    >
      <div
        class="w-full"
        style=" height:550px; grid-template-rows: 490px 60px; display: grid; width: 60%;; margin-left: calc(100%/5);color:#3730a3; margin-right: calc(100%/5);"
      >
        <!-- pfp stuff here -->
        <div class="h-full pfpContainer">
          <div class="pfpAndName">
            <img
              class="pfp bg-slate-100"
              src={data.userData.pfp_url}
              alt="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              style="min-width: 165px; min-height: 165px;"
            />

            <div class="name">
              {#if data.userData.name != "Not Specified"}
                {data.userData.name}
              {:else}
                {data.userData.username}
              {/if}
            </div>
          </div>
          <div class="friends" />
          <div class="edit" />
          <img
            class="banner"
            src={data.userData.bg_url}
            alt="https://img.freepik.com/premium-vector/modern-minimal-white-stripe-texture-background_105940-1925.jpg"
          />
        </div>
        <div
          class="font-bold text-xl h-full bg-white border-t-2"
          style="display: grid; grid-template-columns: 1fr ; text-align: center; width:95%; align-self: center; justify-self: center; align-items: center; vertical-align: middle;"
        >
          <a
            href="#"
            class="centerText flex items-center"
            style=" vertical-align: middle; margin:auto;  height: 100%;
    border-bottom: 4px solid #3730a3; padding-left: 15px; padding-right: 15px;">Description</a
          >
        </div>
      </div>
    </div>

    <div class="bg-slate-100 z-0 min-h-screen">
      <div class="ml-auto mr-auto w-[60%] grid bottomHalf">
        <div class="leftSide grid-flow-row">
          <div
            class="mt-3 bg-white border-2 rounded-lg drop-shadow-sm shadow-blue-500/20 min-h-[300px]"
          >
            <div class="col-span-1 flex flex-col">
              <h2
                class="text-3xl ml-8 mt-4 font-bold text-[#3730A3] mb-4 self-start"
              >
                Activity Feed
              </h2>
              <div class="col-span-4 mt-4">
                <!-- Activity feed content goes here -->
                <div class="ml-9 mr-9 bg-white rounded">
                  <div class="flex items-center mb-2">
                    <i class="fas fa-hiking text-[#3730A3] mr-2" />
                    <span class="text-[#3730A3] font-bold">Hiking:</span>
                  </div>
                  <div class="border-t-2 border-[#3730A3] pt-2">
                    Went for a refreshing hike today!
                  </div>
                </div>

                <div class="m-4 p-4 bg-white rounded">
                  <div class="flex items-center mb-2">
                    <i class="fas fa-bicycle text-[#3730A3] mr-2" />
                    <span class="text-[#3730A3] font-bold">Cycling:</span>
                  </div>
                  <div class="border-t-2 border-[#3730A3] pt-2">
                    Enjoyed a long bike ride this evening.
                  </div>
                </div>

                <div class="m-4 p-4 bg-white rounded">
                  <div class="flex items-center mb-2">
                    <i class="fas fa-book-open text-[#3730A3] mr-2" />
                    <span class="text-[#3730A3] font-bold">Reading:</span>
                  </div>
                  <div class="border-t-2 border-[#3730A3] pt-2">
                    Immersed in a good book right now.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="mt-3 bg-white border-2 rounded-lg drop-shadow-sm shadow-blue-500/20 h-auto"
          >
            <h2
              class="text-3xl ml-8 mt-4 font-bold text-[#3730A3] mb-4 self-start"
            >
              Friends
            </h2>
            <div class="grid friends h-full">
              {#each Array(9) as _, index (index)}
                <div class="friend grid">
                  <img
                    class="friendPfp"
                    src="https://thispersondoesnotexist.com/"
                    alt="pfp"
                    style="max-width: 140px; max-height: 100%;"
                  />
                  <p class="friendName">Elon</p>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <div class="rightSide">
          <div
            class="mt-3 bg-white border-2 rounded-lg drop-shadow-sm shadow-blue-500/20 h-[300px] flex flex-col"
          >
            <h class="friendName ml-10 mt-3">New Post</h>
            <input
              class="mt-4 mb-2 w-[95%] h-10 bg-slate-100 self-center border-2 rounded-md"
            />
            <textarea
              class=" w-[95%] h-32 bg-slate-100 self-center rounded-md border-2"
            />
            <button
              class="w-[95%] h-10 font-bold text-white mt-3 bg-[#3730a3] rounded-md border-4 self-center"
              >Post</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

<style>
  .pfpAndName {
    grid-row: 64/80;
    grid-column: 3 / 13;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
  .post-content {
    margin: 30px;
  }
  .friendName {
    font-size: 1.5rem;
    font-weight: bold;
    color: #3730a3;
  }
  .friend {
    grid-template-rows: auto auto;
    justify-items: center;
    margin-bottom: 0.8rem;
  }
  .friendPfp {
    border-radius: 10px;
    border: 2px solid #3730a3;
    margin: auto;
  }
  .friends {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .bottomHalf {
    grid-template-columns: 1fr 1.3fr;
    gap: 10px;
  }
  .name {
    /* grid-row: 80;
    grid-column: 34 / 100; */
    font-size: 2rem;
    font-weight: bold;
    color: #3730a3;
    margin-left: 40px;
    width: 600px;
    z-index: 1;
  }
  .banner {
    grid-row: 1 / 74;
    grid-column: 1 / 182;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0px 0px 12px 12px;
  }
  .pfp {
    /* grid-row: 64/80;
    grid-column: 3 / 13; */
    border-radius: 50%;
    margin-left: 25%;
    border: 8px solid white;
    z-index: 1;
    /* margin-bottom: 5%; */
  }
  .pfpContainer {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(180, calc(100% / 180));
    grid-template-rows: repeat(100, calc(100% / 100));
  }
  .nav-el:hover {
    border-bottom: 2px solid #3730a3;
  }
  .centerText {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    height: 100%;
    border-bottom: 4px solid #3730a3;
  }
</style>
