<script>
    import NavBar from "$lib/components/NavBar.svelte";
  
    let formData = {
      name: "",
      age: "",
      profilePage: "",
      backgroundUrl: "",
      pronouns: "",
      title: "",
      subTopic: "",
      description: ""
    };
  
    function handleSubmit(event) {
      event.preventDefault();
      // Handle form submission logic here using the formData object
      console.log(formData);
    }
  </script>
  
  <svelte:head>
    <title>CREATE</title>
    <meta name="description" content="Forum" />
  </svelte:head>
  
  <body class="bg-white">
    <header>
      <NavBar />
    </header>
  
    <div class="container mx-auto mt-8">
      <div class="rounded bg-[#3730A3] text-white p-4 mb-4">
        <span class="text-lg font-bold">Create New Profile</span>
      </div>
      <div class="flex items-center mb-4">
        <span class="text-sm text-gray-600 mr-2">* indicates required field</span>
        <div class="flex-grow h-0.5 bg-gray-300"></div>
      </div>
      <form class="max-w-md mx-auto" on:submit={handleSubmit}>
        <div class="mb-4">
          <label for="name" class="block text-gray-600">Name*</label>
          <input type="text" id="name" bind:value={formData.name} class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required>
        </div>
        <div class="mb-4">
          <label for="age" class="block text-gray-600">Age*</label>
          <input type="text" id="age" bind:value={formData.age} class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required>
        </div>
        <div class="mb-4">
          <label for="profilePage" class="block text-gray-600">Profile Page:</label>
          <input type="text" id="profilePage" bind:value={formData.profilePage} class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required>
        </div>
        <div class="mb-4">
          <label for="backgroundUrl" class="block text-gray-600">Background URL:</label>
          <input type="text" id="backgroundUrl" bind:value={formData.backgroundUrl} class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required>
        </div>
        <div class="mb-4">
          <label for="pronouns" class="block text-gray-600">Pronouns:</label>
          <input type="text" id="pronouns" bind:value={formData.pronouns} class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required>
        </div>
  
        <!-- Additional fields for creating a new topic -->
        <!-- ... (existing fields) -->
  
        <!-- Submit Button -->
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  </body>
  