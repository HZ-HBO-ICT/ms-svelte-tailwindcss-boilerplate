<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import { onMount } from "svelte";
    onMount(async () => {});
    let postTitle;
    let postContent;
    let postAuthor = "Admin";
    function createPost() {
      const url = "http://localhost:3001/postPost"; // Replace with your actual API endpoint
  
      const postData = {
        title: postTitle,
        author: postAuthor,
        content:
         postContent,
      };
  
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You may need to include additional headers depending on your API requirements
        },
        // mode: "cors", // This enables CORS
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Post request successful:", data);
          // Handle the response data as needed
        })
        .catch((error) => {
          console.error("Error making POST request:", error);
          // Handle errors
        });
        window.location.href = "/home";
    }
    function openModal() {
  isModalOpen = true;
}

function closeModal() {
  isModalOpen = false;
}
  </script>
  
  <svelte:head>
    <title>CREATE</title>
    <meta name="description" content="Forum" />
  </svelte:head>
  <header>
    <NavBar />
  </header>
  <body class="bg-white">
    <div class="container mx-auto mt-8">
      <div class="rounded bg-[#3730A3] text-white p-4 mb-4">
        <span class="text-lg font-bold">Create Profile</span>
      </div>
      
      <div class="flex items-center mb-4">
        <span class="text-sm text-gray-600 mr-2">* indicates required field</span>
        <div class="flex-grow h-0.5 bg-gray-300"></div>
      </div>
  
      <form class="max-w-md mx-auto relative">
        <div class="mb-4">
          <label for="username" class="block text-gray-600">Username *</label>
          <input
            type="text"
            id="username"
            name="username"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
            bind:value={postTitle}
          />
        </div>
  
        <div class="mb-4">
          <label for="country" class="block text-gray-600">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
            bind:value={postTitle}
          />
        </div>
  
        <div class="mb-4">
          <label for="open" class="block text-gray-600">Open to talk about</label>
          <input
            type="text"
            id="open"
            name="open"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
            bind:value={postTitle}
          />
        </div>
        <div>
        <!-- Submit Button -->
        <button
          type="submit"
          on:click={createPost}
          class="absolute bottom-0 right-0 bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
<!-- Modal toggle -->
<button on:click={openModal} class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>
<!-- Main modal -->
<div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Terms of Service
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span class="sr-only">Close modal</span>
              </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              <button data-modal-hide="default-modal" type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
          </div>
      </div>
  </div>
</div>

    </div>
      </form>
    </div>
  </body>