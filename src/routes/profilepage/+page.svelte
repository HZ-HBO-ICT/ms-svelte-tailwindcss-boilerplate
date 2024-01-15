<script>
  import NavBar from "$lib/components/NavBar.svelte";
  import { page } from "$app/stores";

  let unhide = false;

  function openPop() {
    unhide = true;
  }

  function closePop() {
    unhide = false;
  }
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
          <img
            class="pfp"
            src="https://cdn.pixabay.com/photo/2018/10/23/10/29/cat-3767494_640.jpg"
            alt="pfp"
            style="min-width: 165px; min-height: 165px;"
          />

          <div class="name">Cattingsohn Meowler<button on:click={openPop}>
          <i class="fas fa-edit ml-2 text-[#3730A3] cursor-pointer">
          </i>
          </button>
          </div>
          
          <div class="friends" />
          <div class="edit" />
          <img
            class="banner"
            src="https://www.ntounas.gr/wp-content/uploads/2021/02/Lonely_Tree_in_a_Lavender_Field_in_Greece.jpg  "
          />
        </div>
        <div
          class="font-bold text-xl h-full bg-white border-t-2"
          style="display: grid; grid-template-columns: 1fr 1fr 2fr 1fr; text-align: center; width:95%; align-self: center; justify-self: center; align-items: center; vertical-align: middle;"
        >
          <a
            href="#"
            class:active={$page.url.pathname == "/profilepage"}
            class="centerText flex items-center"
            style=" vertical-align: middle;">Posts</a
          >
          <a
            href="#"
            class=" centerText h-full nav-el"
            style=" vertical-align: middle;">Friends</a
          >
          <div class="h-full" />
          <a
            href="#"
            class="centerText h-full nav-el"
            style=" vertical-align: middle;">About Me</a
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
              {#each Array(5) as _, index (index)}
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
              class="w-[95%] h-10 font-bold text-white mt-3 bg-[#3730a3] border-2 rounded-md border-4 self-center"
              >Post</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- Popup -->
<div id="crud-modal" tabindex="-1" aria-hidden="false" class="{unhide ? '': 'hidden' } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-black rounded-lg shadow dark:bg-gray-70 transform translate-x-1/2 translate-y-1/2">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Create Profile
                </h3>
                <button type="button" on:click={closePop} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  * indicates required field
              </h3>
            
          </div>
            <!-- Modal body -->
            <form class="p-4 md:p-5">
                <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username*</label>
                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                    </div>
                    <div class="col-span-2">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Showable Name*</label>
                      <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                    </div>
                    <div class="col-span-2">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                      <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                    </div>
                    <div class="col-span-2">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Open to talk about</label>
                      <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                    </div>
                    <div class="col-span-2">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Languages</label>
                      <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                    </div>
                    <div class="col-span-2">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hobbies</label>
                      <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select category</option>
                            <option value="Talk">Talk about problems</option>
                            <option value="PC">Tips</option>
                            
                        </select>
                    </div>
                    <div class="col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About me</label>
                        <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                    </div>
                </div>
                <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Create Profile
                </button>
            </form>
        </div>
    </div>
</div> 


</body>

<style>
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
    grid-row: 80;
    grid-column: 34 / 100;
    font-size: 2rem;
    font-weight: bold;
    color: #3730a3;

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
    grid-row: 64/80;
    grid-column: 3 / 13;
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