<script>
    import { supabase } from "../../supabase";
    import { userEmail, userData, userMatch } from "../../stores.js";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    function redirectToProfile() {
        goto(`/profilepage/${$userData.username}`);
    }
    import { redirect } from "@sveltejs/kit";
    let username;
    // @ts-ignore
    console.log("Username - " + $userData.username);
    // @ts-ignore

    let usersData;
    userData;
    console.log("User Email - " + $userEmail);
    console.log("User Match - " + $userMatch);
    console.log($userData);
    async function getUsersData() {
        if ($userMatch == undefined || $userMatch == "") {
            if ($userData.username != undefined) {
                console.log("LOG IN USERSDATA " + $userData.username);

                await fetch(
                    "http://localhost:3001/match/username/" + $userData.username
                )
                    .then((response) => response.json())
                    .then((data) => (usersData = data[0]));
                console.log(usersData);
                if (usersData.user1 == $userData.username) {
                    console.log("dog");

                    userMatch.set(usersData.user2);
                    alert("Match found! Your match is " + usersData.user2);
                } else if (usersData.user2 == $userData.username) {
                    userMatch.set(usersData.user1);
                    alert("Match found! Your match is " + usersData.user1);
                    console.log("dog 2");
                }
            }
        }
    }
    onMount(async () => {
        username = $userData.username;
        if ($userData.username != undefined && $userData.username != "") {
            try {
                setTimeout(() => {}, 1000);
                console.log("doggie");
                getUsersData();
            } catch (error) {
                console.error("Error fetching match:", error);
            }
        }
    });

    async function signOut() {
        const { error } = await supabase.auth.signOut();
        console.log("signed out");
        userMatch.set("");
        userEmail.set("signed out");
        console.log($userEmail);
        userData.set({ username: "" });
        window.location.href = "/home";
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
                {#if $userEmail != "signed out"}
                    {#if $userMatch != ""}
                        <a
                            href="/chats"
                            class="text-[#DFC2F2] text-2xl p-8 font-bold hover:text-white"
                        >
                            <i class="fas m-2 fa-comments" /> chat
                        </a>
                    {/if}

                    <a
                        href="/journal"
                        class="text-[#DFC2F2] text-2xl font-bold hover:text-white"
                    >
                        <i class="fas m-2 fa-user" />journal  </a
                    >

                    <a
                        href="/challenges"
                        class="text-[#DFC2F2] text-2xl font-bold hover:text-white"
                    >
                        <i class="fas m-2 fa-user" />challenges  </a
                    >

                    <a
                        href="/matchPage"
                        class="text-[#DFC2F2] text-2xl font-bold hover:text-white"
                    >
                        <i class="fas m-2 fa-user" />match page</a
                    >
                      <a
                        on:click={redirectToProfile}
                        class="text-[#DFC2F2] text-2xl font-bold hover:text-white"
                    >
                        <i class="fas fa-user m-2" /> profile</a
                    >

                    <!-- <i
                    class="fa-solid fa-moon text-[#DFC2F2] text-2xl font-bold hover:text-white"
                />
                <i
                    class="fa-solid fa-sun text-[#DFC2F2] text-2xl font-bold hover:text-white"
                /> -->
                    <!-- <button on:click={getUsersData} class="def p-2 m-2"
                        >check for match</button
                    > -->
                    <button on:click={signOut} class="def p-2 m-2"
                        >Log out</button
                    >
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
