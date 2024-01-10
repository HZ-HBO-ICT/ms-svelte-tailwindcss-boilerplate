<script>
    let dailyChallengeData = [
      { day: 1, challengeNumber: [1, 2, 3], challenge: "take a walk", },
      { day: 2, challengeNumber: [4] , challenge: "tell your match a joke"},
      { day: 3, challengeNumber: [5] , challenge: "Tell yourself you are beautifull in the mirror"},
      { day: 4, challengeNumber: [6] , challenge: "hang out with someone"},
      { day: 5, challengeNumber: [7] , challenge: "take some drugs"},
      { day: 6, challengeNumber: [8] , challenge: "smoke a joint"},
      { day: 7, challengeNumber: [9] , challenge: "take a yoga session"},
    ];
  </script>
  
  <body class="bg-slate-100 w-full h-full items-center">
    <div class="navbar">
      <div class="w-full h-24 bg-indigo-800 shadow">
        <div class="w-48 h-14 text-white text-5xl font-extrabold font-inter mx-auto">Anxietr</div>
      </div>
    </div>
    <div class="content">
      <div class="w-full h-full flex items-center justify-center mt-8">
        <div class="w-4/5 max-w-5xl h-full bg-white">
          {#each dailyChallengeData as { day, challengeNumber, challenge }}
            <div class="m-5 bg-zinc-300 justify-center mb-10 pb-1 text-white">
              <div class="w-full h-5 bg-indigo-800">
                Day {day}
              </div>
              <div class="justify-center">
                {#each challengeNumber as num}
                  <div class="bg-indigo-500 h-16 m-3">
                    <div class="p-2 flex w-full">
                        <div class="flex">
                            <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">
                                <div class="p-1">{num}</div>
                            </div>
                            <div class="Rectangle72 w-12 h-12 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">
                                <div class="p-1">;)</div>
                            </div>
                        </div>
                      <div class="w-full text-black m-1 p-1 bg-white bg-opacity-50 rounded-2xl">
                        {challenge}
                      </div>
                      <div class="">
                        <div class="flex float-right">
                            <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">
                                <div class="p-1"></div>
                            </div>
                            <div class="Rectangle72 w-12 h-12 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">
                                <div class="p-1"></div>
                            </div>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </body>
  
  <style>
  </style>
  