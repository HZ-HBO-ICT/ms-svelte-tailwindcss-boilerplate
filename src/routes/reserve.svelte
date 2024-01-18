<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import { page } from "$app/stores";
  
    let bannerSrc = "Insert Image";
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
            <a href="/crud" class='name-link'>
              <div class="flex-container">
                <img
                  class="pfp"
                  src="https://cdn.pixabay.com/photo/2018/10/23/10/29/cat-3767494_640.jpg"
                  alt="Add an Image"
                  style="min-width: 165px; min-height: 165px;"
                /> 
  
            <div class="name">
              Name <i class="fa-solid fa-pen-to-square"></i></div>
            </div>
          </a>
            <div class="friends" />
            <div class="edit" />
            <img class="banner" src=[bannerSrc] alt="banner" />
  
          </div>
          <div
    class="font-bold text-xl h-full bg-blue-200 border-t-2 rounded-md"
    style="display: grid; grid-template-columns: 1fr 1fr 2fr 1fr; text-align: center; width:95%; align-self: center; justify-self: center; align-items: center; vertical-align: middle; border-radius: 50%;"
  >
    <a
      href="#"
      class:active={$page.url.pathname == "/profilepage"}
      class="centerText flex items-center"
      style= 'vertical-align: middle; justify-content: center; align-items: center; flex-grow: 1;'
    >
      Add text here
    </a>
  </div>
        </div>
      </div>
      <div class="bg-slate-100 z-0 min-h-screen">
        <div class="ml-auto mr-auto w-[1000%] grid bottomHalf">
          <div class="leftSide grid-flow-row">
            <div
              class="mt-3 bg-white border-2 rounded-lg drop-shadow-sm shadow-blue-500/20 min-h-[300px]">
              <div class="col-span-1 flex flex-col">
                <h2
                  class="text-3xl ml-8 mt-4 font-bold text-[#3730A3] mb-4 self-start"
                >
                  About me
                </h2>
                <div class="col-span-4 mt-4">
                  <!-- other stuff go here -->
                  <div class="ml-9 mr-9 bg-white rounded">
                    <div class="flex items-center mb-2">
                      <i class="fa-solid fa-language text-[#3730A3] mr-2" />
                      <span class="text-[#3730A3] font-bold">Languages</span>
                    </div>
                    <div class="border-t-2 border-[#3730A3] pt-2">
                      insert languages here
                    </div>
                  </div>
                  <div class="ml-9 mr-9 bg-white rounded">
                    <div class="flex items-center mb-2">
                      <i class="fa-light fa-mug-hot text-[#3730A3] mr-2" />
                      <span class="text-[#3730A3] font-bold">Hobbies</span>
                    </div>
                    <div class="border-t-2 border-[#3730A3] pt-2">
                      insert hobbies here
                    </div>
                  </div>
                  <div class="ml-9 mr-9 bg-white rounded">
                    <div class="flex items-center mb-2">
                      <i class="fa-solid fa-ghost text-[#3730A3] mr-2" />
                      <span class="text-[#3730A3] font-bold">Fears</span>
                    </div>
                    <div class="border-t-2 border-[#3730A3] pt-2">
                      insert fears
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
      margin-left: 10%;
      display: inline-block;
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
    .pfp:hover {
      opacity: 0.8;
    }
    .pfpContainer {
      width: 100%;
  
      display: grid;
      grid-template-columns: repeat(180, calc(100% / 180));
      grid-template-rows: auto auto;
      align-items: center;
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
    .fa-pen-to-square {
    margin-left: 5px;
  }
  </style>