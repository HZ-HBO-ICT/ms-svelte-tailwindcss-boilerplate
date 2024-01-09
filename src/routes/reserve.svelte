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
        <span class="text-lg font-bold">Create New Topic</span>
      </div>
  
      <form class="max-w-md mx-auto">
        <div class="mb-4">
          <label for="title" class="block text-gray-600">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
            bind:value={postTitle}
          />
        </div>
        <!-- <div class="mb-4">
          <label for="subTopic" class="block text-gray-600">Sub-Topic:</label>
          <input
            type="text"
            id="subTopic"
            name="subTopic"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div> -->
        <div class="mb-4">
          <label for="description" class="block text-gray-600">Description:</label
          >
          <textarea
            id="description"
            name="description"
            rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
            bind:value={postContent}
          />
        </div>
        <!-- Submit Button -->
        <button
       
          type="submit"
          on:click={createPost}
          class="bg-green-500 text-white px-4 py-2 rounded">Submit</button
        >
  
        <!-- <button class="bg-blue-500 text-white px-4 py-2 rounded">
          <i class="fa fa-pencil-alt" /> Edit
        </button>
  
        <button class="bg-red-500 text-white px-4 py-2 rounded">
          <i class="fa fa-trash-alt" /> Delete
        </button> -->
      </form>
    </div></body
  >
