<script>
  import NavBar from "$lib/components/NavBar.svelte";
  import { userEmail, userData } from "../../stores.js";

  let formData = {
    username: "",
    name: "",
    age: 0,
    pfp_url: "",
    bg_url: "",
    pronouns: "",
    description: "",
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // @ts-ignore
    formData.username = $userData.username;
    if (formData.username != null) {
      if ((formData.name == "")) formData.name = "Not Specified";
      if ((formData.age == 0)) formData.age = 0;
      if ((formData.pfp_url == ""))
        formData.pfp_url =
          "https://th.bing.com/th/id/OIP.BpxTl9LFxEb3W_C3o31UogHaHa?rs=1&pid=ImgDetMain";
      if ((formData.bg_url == ""))
        formData.bg_url =
          "https://static.vecteezy.com/system/resources/previews/000/543/813/original/white-abstract-background-vector.jpg";
      if ((formData.pronouns == "")) formData.pronouns = "Not Specified";
      if ((formData.description == "")) formData.description = "Yet to be added";

      fetch("http://localhost:3001/acc/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // You may need to include additional headers depending on your API requirements
        },
        // mode: "cors", // This enables CORS
        body: JSON.stringify(formData),
      });
      // Handle form submission logic here using the formData object
      console.log(formData);
    }

    //@ts-ignore
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
      <span class="text-sm ml-2 text-gray-600 mr-2"
        >These are optional things you can setup for your profile.</span
      >
      <div class="flex-grow h-0.5 bg-gray-300 mr-2" />
    </div>
    <form class="max-w-md mx-auto" on:submit={handleSubmit}>
      <div class="mb-4">
        <label for="name" class="block text-gray-600">Name</label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="age" class="block text-gray-600">Age</label>
        <input
          type="text"
          id="age"
          bind:value={formData.age}
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="profilePage" class="block text-gray-600"
          >Profile Page:</label
        >
        <input
          type="text"
          id="profilePage"
          bind:value={formData.pfp_url}
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="backgroundUrl" class="block text-gray-600"
          >Background URL:</label
        >
        <input
          type="text"
          id="backgroundUrl"
          bind:value={formData.bg_url}
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="pronouns" class="block text-gray-600">Pronouns:</label>
        <input
          type="text"
          id="pronouns"
          bind:value={formData.pronouns}
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-600">Description:</label>
        <textarea
        
          id="description"
          bind:value={formData.description}
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
    
      </div>

      <!-- Additional fields for creating a new topic -->
      <!-- ... (existing fields) -->

      <!-- Submit Button -->
      <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded"
        >Submit</button
      >
    </form>
  </div>
</body>
