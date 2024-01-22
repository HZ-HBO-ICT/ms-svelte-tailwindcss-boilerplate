<script>
  import { onMount } from "svelte";
  import { createClient } from "@supabase/supabase-js";
  import { userEmail, userToken, userData } from "../../stores.js";
  import NavBar from "$lib/components/NavBar.svelte";
  import key from "../../key.js";
  import url from "../../url.js";


  const supabase = createClient(url(), key());

  let showSignup = true;
  let username = "";
  let email;
  let password = "";

  let password2;

  async function signUpNewUser() {
    if (password == password2) {
      signOut();
      console.log("sign up");

      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: "https://example.com/welcome",
        },
      });
      if (data) {
        userEmail.set(email);
        userData.set({
          username: username,
          email: email,
        });
      }
      if (error == null) {
        const accData = {
          username: username,
          email: email,
        };
        fetch("http://localhost:3001/acc/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // You may need to include additional headers depending on your API requirements
          },
          // mode: "cors", // This enables CORS
          body: JSON.stringify(accData),
        });
      }
      console.log(error);
      window.location.href = "/setupProfile";
    } else console.log("passwords not matching");
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log("signed out");
    console.log($userEmail);
    $userEmail = "signed out";
    $userData = {};
    console.log($userEmail);
  }

  async function signInWithEmail() {
    signOut();
    console.log("sign in");
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log(data);

    if (error == null) {
      // @ts-ignore
      userEmail.set(data.user.email);

      await fetch("http://localhost:3001/acc/email/" + email)
        .then((response) => response.json())
        .then((data) => userData.set(data[0]));
      console.log($userData);
    }

    // @ts-ignore

    console.log($userEmail);
  }

  // Function to toggle between signup and login
  function toggleView() {
    showSignup = !showSignup;
  }

  // Scroll to the top of the page when the component is mounted
  onMount(() => {
    console.log($userEmail);
    window.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <title>welcome</title>
  <meta name="description" content="welcome" />
</svelte:head>

<header>
  <NavBar />
</header>
<main>
  <div
    class="welcome-message h-[90px] bg-white rounded-[10px] shadow flex items-center justify-center"
  >
    <div class="text-indigo-800 text-5xl font-extrabold">
      Welcome to Anxietr, your cozy corner.
    </div>
  </div>

  <div class="contain flex justify-around">
    <div
      class=" long-welcome-text w-[782px] h-[600px] bg-white rounded-[10px] shadow border border-slate-100 flex items-center justify-center"
    >
      <div class="w-[579px] h-[396px] text-indigo-800 text-4xl font-bold">
        Explore a comforting space designed just for you. Connect with a caring
        companion, share your journey - the highs, lows, and everything in
        between. Our journaling feature creates a personal haven, offering a
        safe space for reflection. 🌟
      </div>
    </div>

    <div>
      <div class="contain flex justify-around">
        <div>
          {#if $userEmail == "signed out"}
            {#if showSignup}
              <!-- Signup Form -->

              <form
                on:submit|preventDefault={signUpNewUser}
                class="signup w-[474px] h-[600px] bg-white rounded-[10px] shadow border border-slate-100 grid place-items-center"
              >
                <div class="text-center text-indigo-800 text-5xl font-bold">
                  Sign up
                </div>
                <input
                  class="w-[389px] h-[65px] bg-slate-100 rounded-[10px] shadow border-2 border-slate-100"
                  type="text"
                  required
                  bind:value={username}
                  placeholder="Username"
                />
                <input
                  class="w-[389px] h-[65px] bg-slate-100 rounded-[10px] shadow border-2 border-slate-100"
                  type="text"
                  bind:value={email}
                  required
                  placeholder="Email"
                />
                <input
                  class="w-[389px] h-[65px] bg-slate-100 rounded-[10px] shadow border-2 border-slate-100"
                  type="text"
                  bind:value={password}
                  required
                  placeholder="Password"
                />
                <input
                  class="w-[389px] h-[65px] bg-slate-100 rounded-[10px] shadow border-2 border-slate-100"
                  type="text"
                  bind:value={password2}
                  required
                  placeholder="Confirm Password"
                />
                <button
                  type="submit"
                  class="w-[389px] h-[65px] bg-indigo-800 rounded-[10px] shadow text-white text-2xl font-bold"
                  >Sign up</button
                >
                <p>
                  Already have an account? <a href="#" on:click={toggleView}
                    >Switch to Login</a
                  >
                </p>
              </form>
            {:else}
              <!-- Login Form -->
              <form
                on:submit|preventDefault={signInWithEmail}
                class="login w-[474px] h-[600px] bg-white rounded-[10px] shadow border border-slate-100 grid place-items-center"
              >
                <div class="text-center text-indigo-800 text-5xl font-bold">
                  Log In
                </div>
                <input
                  bind:value={email}
                  class="w-[389px] h-[65px] bg-slate-100 rounded-[10px] shadow border-2 border-slate-100"
                  type="text"
                  placeholder="E-mail"
                />
                <input
                  bind:value={password}
                  class="w-[389px] h-[65px] bg-slate-100 rounded-[10px] shadow border-2 border-slate-100"
                  type="text"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  class="w-[389px] h-[65px] bg-indigo-800 rounded-[10px] shadow text-white text-2xl font-bold"
                  >Log in</button
                >
                <p>
                  Don't have an account? <a href="#" on:click={toggleView}
                    >Switch to Signup</a
                  >
                </p>
              </form>
            {/if}
          {:else}
            <div
              class=" def p-10 text-center text-indigo-800 text-5xl font-bold"
            >
              You are already logged in!
            </div>
          {/if}

          <!-- else content here -->
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .def {
    --tw-bg-opacity: 1;
    border-radius: 0.5rem /* 8px */;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    border-width: 2px;
    --tw-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
      var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
      var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    --tw-shadow-color: rgb(59 130 246 / 0.2);
    --tw-shadow: var(--tw-shadow-colored);
  }
</style>
