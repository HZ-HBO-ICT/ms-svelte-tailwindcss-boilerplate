<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import JournalEntries from "$lib/components/JournalEntries.svelte";

    onMount(async () => {});

    function redirectToCreateEntry() {
        goto("/journal/create");
    }
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

<body class="bg-gray-200 min-h-screen">
    <div class="mt-40">
        <div class="flex items-center justify-center">
            <div
                class="relative bg-[#FFFFFF] p-4 mb-4 rounded-md flex flex-col min-h-screen"
                style="width: 90%;"
            >
                <h2 class="text-6xl text-center font-bold text-[#3730A3]">
                    Journal
                </h2>
                <div class="mt-8">
                    <JournalEntries />
                </div>
                <button
                    on:click={redirectToCreateEntry}
                    class="absolute bottom-4 right-4 bg-[#3730A3] text-white px-4 py-2 rounded-md text-2xl font-bold"
                    >Add Entry</button
                >
            </div>
        </div>
    </div>
</body>
