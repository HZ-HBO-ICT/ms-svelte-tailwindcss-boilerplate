<script src="./app.js">
    import { supabase } from "../../supabase";
    import { userEmail,userData } from "../../stores.js";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  // @ts-ignore
    console.log("Username - " +  $userData.username)
    // @ts-ignore
        let username = $userData.username;
    console.log("User Email - " + $userEmail)
    console.log($userData);
 
    async function signOut() {
           
        const { error } = await supabase.auth.signOut();
        console.log("signed out")
        console.log($userEmail)
             $userEmail = "signed out";
         $userData ={};
         console.log($userEmail)
    }
   
    

</script>

<head>
    <!-- Other head elements -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
    <title>Your Page Title</title>
</head>
<nav class="bg-[#3730A3] p-4 sticky top-0 w-full z-10">
    <div class="container mx-auto flex justify-between items-center">
        <a href="/home" class="text-[#DFC2F2] text-6xl font-bold">Anxietr</a>

        <ul class="flex space-x-4 items-center">
            <li>
                <a
                    href="/home"
                    class="text-[#DFC2F2] text-2xl font-bold hover:text-white"
                >
                    <i class="fas fa-home" />
                </a>
                <a
                    href="/chat"
                    class="text-[#DFC2F2] text-2xl p-8 font-bold hover:text-white"
                >
                    <i class="fas fa-users" />
                </a>
                <a
                    href="/activities"
                    class="text-[#DFC2F2] text-2xl p-8 font-bold hover:text-white"
                >
                    <i class="fas fa-comments" />
                </a>
                <a
                    href="/profilepage/{username}"
                    class="text-[#DFC2F2] text-2xl font-bold hover:text-white"
                >
                    <i class="fas fa-user" /></a
                >
                <!-- <i
                    class="fa-solid fa-moon text-[#DFC2F2] text-2xl font-bold hover:text-white"
                />
                <i
                    class="fa-solid fa-sun text-[#DFC2F2] text-2xl font-bold hover:text-white"
                /> -->
                {#if $userEmail != "signed out"}
                    <button on:click={signOut} class="def p-2 m-2">Log out</button>
                {/if}
            </li>
        </ul>
    </div>
</nav>

<style>
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
