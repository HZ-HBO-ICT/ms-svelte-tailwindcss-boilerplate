<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    onMount(async () => {});

    let jounalEntryTitle;
    let journalEntryContent;

    function createJournalEntry() {
        const url = "http://localhost:3010/journalentries";

        const journalEntryData = {
            Title: jounalEntryTitle,
            Content: journalEntryContent,
        };

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(journalEntryData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                goto("/journal");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
</script>

<svelte:head>
    <title>Add Entry</title>
    <meta name="description" content="AddEntry" />
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
                        Add Entry
                    </h2>
                    <form id="entryForm">
                        <div class="mb-4">
                            <label
                                for="title"
                                class="block text-2xl font-bold text-[#3730A3]"
                                >Title</label
                            >
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                bind:value={jounalEntryTitle}
                                class="mt-1 p-2 block w-full border rounded-md"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                for="content"
                                class="block text-2xl font-bold text-[#3730A3]"
                                >Content</label
                            >
                            <textarea
                                id="content"
                                name="content"
                                required
                                bind:value={journalEntryContent}
                                class="mt-1 p-2 block w-full border rounded-md"
                            />
                        </div>

                        <button
                            type="submit"
                            on:click={createJournalEntry}
                            class="absolute bottom-4 right-4 bg-[#3730A3] text-white px-4 py-2 rounded-md text-2xl font-bold"
                            >Submit</button
                        >
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
