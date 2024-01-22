<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import { onMount } from "svelte";
    import { userData, userMatch } from "../../stores.js";

    // import  session  from '$app/stores';
    // const supabase = createClient("https://dgmvlwyaxmqsoixhuaoz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnbXZsd3lheG1xc29peGh1YW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNjIxOTYsImV4cCI6MjAyMDYzODE5Nn0.bsQfkT84K2_Qjcqe8C4J6RKkvHy1BY1Rpd1jZSNgy4Q");
    // @ts-ignore
    const sender = $userData.username;
    const receiver = $userMatch;
    let content = "";
    let chats = [];
    let messageBody;
    onMount(async () => {
        // Fetch initial chats when the component is mounted

        messageBody.scrollTop = messageBody.scrollHeight;
        await getChats();
    });

    async function getChats() {
        try {
            const response = await fetch(
                `http://localhost:3060/chats/${sender}/${receiver}`
            );
            const data = await response.json();
            console.log(data);
            chats = data;
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    }
    chatRefresher();
    function chatRefresher() {
        setTimeout(function () {
            getChats();
            chatRefresher();
        }, 3000);
    }
    async function sendMessage() {
        const data = {
            user1: sender,
            user2: receiver,
            content: content,
        };
        try {
            const response = await fetch("http://localhost:3060/chats", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            content = "";
            // Check if the response is successful (status code 200)
            if (response.ok) {
                const newMessage = await response.json();
                // Update the UI with the new message
                chats = [...chats, newMessage];
            } else {
                console.error("Error sending message:", response.statusText);
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    }
</script>

<svelte:head>
    <title>Match Page</title>
    <meta name="description" content="User Profile Page" />
</svelte:head>

<header>
    <NavBar />
</header>

<div class="w-4/5 mx-auto gap-4 p-4 max-h-full">
    <h2 class="text-center font-extrabold text-4xl">
        Chat with {receiver}
    </h2>
    <div
        class="flex-1 flex flex-col gap-2 overflow-scroll max-h-[600px]"
        bind:this={messageBody}
    >
        {#each chats as chat}
            {#if chat.user1 == sender}
                <section
                    class="self-end py-2 px-4 border-2 border-white bg-blue-400 text-white"
                    style="border-radius: 15px 15px 0px 15px;"
                >
                    {chat.content}
                </section>
            {:else}
                <section
                    class="self-start py-2 px-4 border-2"
                    style="border-radius: 15px 15px 15px 0px;"
                >
                    {chat.content}
                </section>
            {/if}
        {/each}
    </div>
    <form
        class="border-black border-4 flex gap-4 basis-10 mt-auto"
        method="POST"
        on:submit|preventDefault={sendMessage}
    >
        <input type="text" class="w-full text-xl" bind:value={content} />
        <button type="submit" class="ml-auto p-4 px-6 border-l-4 border-black"
            >Send</button
        >
    </form>
</div>

<style>
    /* Add your styles here */
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
