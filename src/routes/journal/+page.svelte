<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import JournalEntries from "$lib/components/JournalEntries.svelte";
    import NavBar from "$lib/components/NavBar.svelte";

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
    <NavBar />
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
