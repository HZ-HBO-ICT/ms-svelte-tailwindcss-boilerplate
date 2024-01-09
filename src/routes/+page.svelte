
<script>
   // @ts-ignore
   import NavBar from "$lib/components/NavBar.svelte";
  </script>
  <svelte:head>
    <title>welcome</title>
    <meta name="description" content="welcom" />
  </svelte:head>
  
  <header>
    <NavBar />
  </header>
  <main>
    <div class="welcome-message h-[90px] bg-white rounded-[10px] shadow flex items-center justify-center">
        <div class="text-indigo-800 text-5xl font-extrabold font-['Inter']">Welcome to Anxietr, your cozy corner.</div>
    </div>
    
    <div class="contain flex justify-around">
      <div class=" long-welcome-text w-[782px] h-[600px] bg-white rounded-[10px] shadow border border-slate-100 flex items-center justify-center">
        <div class="w-[579px] h-[396px] text-indigo-800 text-4xl font-bold font-['Montserrat']">
            Explore a comforting space designed just for you. Connect with a caring companion, share your journey – the highs, lows, and everything in between. Our journaling feature creates a personal haven, offering a safe space for reflection. 🌟
        </div>
      </div>

      <div class="signup w-[474px] h-[600px] bg-white rounded-[10px] shadow border border-slate-100 grid place-items-center">
        <div class="text-center text-indigo-800 text-5xl font-semibold font-['Inter']">Sign up</div>
        <input class="w-[389px] h-[65px] bg-slate-100 rounded-[10px] shadow border-2 border-slate-100" type="text" placeholder="Username">
        <input class="w-[389px] h-[65px] bg-slate-100 rounded-[10px] shadow border-2 border-slate-100" type="text" placeholder="Email">
        <input class="w-[389px] h-[65px] bg-slate-100 rounded-[10px] shadow border-2 border-slate-100" type="text" placeholder="Password">
        <input class="w-[389px] h-[65px] bg-slate-100 rounded-[10px] shadow border-2 border-slate-100" type="text" placeholder="Confirm Password">
        <button class="w-[389px] h-[65px] bg-indigo-800 rounded-[10px] shadow text-white text-2xl font-bold font-['Inter']">Sign up</button>
      </div>
      
    </div>
  </main>

  <style>
  </style>
