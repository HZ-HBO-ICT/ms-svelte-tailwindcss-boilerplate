<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    function redirectToCreateEntry() {
        goto("/journal/create");
    }

    onMount(() => {
        console.log("mounted");
    });
</script>

<svelte:head>
    <title>Journal</title>
    <meta name="description" content="Journal" />
</svelte:head>

<header>
    <nav class="bg-[#3730A3] p-4 fixed top-0 w-full z-10">
        <div
            class="container pt-4 mx-auto flex justify-between items-center justify-self-center drop-shadow-xl justify-items-center"
        >
            <a href="/home" class="text-white text-6xl font-bold">Anxietr</a>
        </div>
    </nav>
</header>
<body class="bg-gray-200">
    <div class="mt-12">
        <div class="h-full">
            <div class="flex items-center justify-center h-screen">
                <div
                    class="relative bg-[#FFFFFF] p-4 rounded-md"
                    style="height: 75vh; width: 90%;"
                >
                    <h2 class="text-6xl text-center font-bold text-[#3730A3]">
                        Journal
                    </h2>
                    <div class="entry flex mb-4">
                        <div class="date w-1/4 pr-4">
                            <h3 class="text-4xl text-[#3730A3] font-bold">
                                Date
                            </h3>
                        </div>
                        <div class="content w-3/4">
                            <h3 class="text-4xl text-[#3730A3] mb-2 font-bold">
                                Title
                            </h3>
                            <p class="text-xl">
                                Content goes here.
                            </p>
                        </div>
                    </div>
                    <button
                        on:click={redirectToCreateEntry}
                        class="absolute bottom-4 right-4 bg-[#3730A3] text-white px-4 py-2 rounded-md text-2xl font-bold"
                        >Add Entry</button
                    >
                </div>
            </div>
        </div>
    </div>
</body>
