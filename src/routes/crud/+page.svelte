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
    </div>
      </form>
    </div>
  </body>