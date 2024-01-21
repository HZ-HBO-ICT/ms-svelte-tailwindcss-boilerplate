<script>
    import { onMount } from "svelte";

    let entries = [];
    let displayedEntries = 3;

    async function getJournalEntries() {
        const url = "http://localhost:3001/entries";

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
            });

            if (response.ok) {
                entries = await response.json();
                entries.reverse();
                console.log("Success", entries);
            } else {
                console.log("Error", response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${day}/${month}/${year}`;
    }

    onMount(async () => {
        await getJournalEntries();
    });

    function showMore() {
        displayedEntries += 3;
    }
</script>

<div class="entry mb-4">
    {#each entries.slice(0, displayedEntries) as entry (entry.id)}
        <div class="entry flex mb-8">
            <div class="date w-1/4 pr-4">
                <h3 class="text-4xl text-[#3730A3] font-bold">
                    {formatDate(entry.created_at)}
                </h3>
            </div>
            <div class="content w-3/4">
                <h3 class="text-4xl text-[#3730A3] mb-2 font-bold">
                    {entry.Title}
                </h3>
                <p class="text-xl">{entry.Content}</p>
            </div>
        </div>
    {/each}

    {#if entries.length > displayedEntries}
        <button
            on:click={showMore}
            class="bg-[#3730A3] text-white px-4 py-2 rounded-md text-2xl font-bold mt-4"
        >
            Show More
        </button>
    {/if}
</div>
