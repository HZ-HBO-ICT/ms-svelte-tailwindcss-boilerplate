<script>
  import { onMount } from "svelte";

  const apiUrl = 'http://localhost:3001/getChallenges';
  const completionApiUrl = 'http://localhost:3001/completeChallenge';
  const checkCompletionApiUrl = 'http://localhost:3006/checkChallengeCompletion';
  let apiChallengeData = [];
  let completedChallenges ={};
  let completedChallengesMatch ={};
  let userId = 1111;
  let matchId = 2222;

 
  async function checkCompletedChallenges() {
  try {
    const results = await Promise.all(
      apiChallengeData.map(async (challenge) => {
        return {
          id: challenge.id,
          completed: await hasUserCompletedChallenge(userId, challenge.id),
        };
      })
    );

    // Update completedChallenges using the results
    results.forEach((result) => {
      completedChallenges[result.id] = result.completed;
    });

    console.log(completedChallenges);
  } catch (error) {
    console.error('Error checking completed challenges:', error);
  }
}

async function checkCompletedChallengesMatch() {
  try {
    const results = await Promise.all(
      apiChallengeData.map(async (challenge) => {
        return {
          id: challenge.id,
          completed: await hasUserCompletedChallenge(matchId, challenge.id),
        };
      })
    );

    // Update completedChallenges using the results
    results.forEach((result) => {
      completedChallengesMatch[result.id] = result.completed;
    });

    console.log(completedChallengesMatch);
  } catch (error) {
    console.error('Error checking completed challenges:', error);
  }
}

onMount(async () => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    apiChallengeData = await response.json();
    console.log(apiChallengeData);

    await checkCompletedChallenges();
    await checkCompletedChallengesMatch();

  } catch (error) {
    console.error('Error:', error);
  }
});

  const completeChallenge = async (userId, challengeId) => {
    try {
      // Ensure userId is defined before proceeding
      if (!userId) {
        console.error('User ID is undefined.');
        return;
      }

      console.log(userId, challengeId);
      const response = await fetch(completionApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          challengeId,
          completed: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to complete challenge');
      }
      location.reload();
    } catch (error) {
      console.error('Error completing challenge:', error);
    }
  };

 const hasUserCompletedChallenge = async (userId, challengeId) => {
  try {
    const response = await fetch(`${checkCompletionApiUrl}/${userId}/${challengeId}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data); // Log the response data
    data;
    return data;
  } catch (error) {
    console.error('Error checking completion status:', error);
    return false;
  }
};

</script>
  
  <body class="bg-slate-100 w-full h-full items-center">
    <div class="navbar">
      <div class="w-full h-24 bg-indigo-800 shadow">
        <div class="w-48 h-14 text-white text-5xl font-extrabold font-inter mx-auto">Anxietr</div>
      </div>
    </div>
    <div class="content">
      <div class="w-full h-full flex items-center justify-center mt-8">
        <div class="w-4/5 max-w-5xl h-full bg-white items-center">
          <div class="text-black text-5xl font-bold font-inter text-center">Challenges</div>
          {#if Array.isArray(apiChallengeData)}
          <div class="m-5 bg-zinc-300 justify-center mb-10 pb-1 text-white">
              <div class="w-full flex bg-indigo-800">
                <div class="pl-3 h-5 text-sm font-bold">
                  Day 1
                </div>
                <div class="flex justify-end w-11/12">
                  <div class="pl-3 h-5 text-sm font-bold flex">
                    You
                  </div>
                  <div class="pl-3 h-5 text-sm font-bold right-3 flex ">
                    Stranger
                  </div>
                </div>
              </div>
              {#each apiChallengeData.slice(0, 3) as { id, challenge, icon }}
  <div class="justify-center">
    <div class="bg-indigo-500 h-16 m-3">
      <div class="p-2 flex w-full">
        <div class="flex">
          <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">
            <div class="p-1">{id}</div>
          </div>
          <div class="Rectangle72 w-12 h-12 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">
            <div class="p-1">{icon}</div>
          </div>
        </div>
        <div class="w-full text-black m-1 p-1 bg-white bg-opacity-50 rounded-2xl">
          {challenge}
        </div>
        <div class="">
          <div class="flex float-right">
            {#if completedChallenges[id]}
              <!-- code to execute if the user has completed the challenge -->
              <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">✔️</div>
            {:else}
              <button on:click={() => completeChallenge(userId, id)}>
                <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center"></div>
              </button>
            {/if}
            {#if completedChallengesMatch[id]}
            <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">✔️</div>
             {:else}
             <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center"></div>
         {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
{/each}
            </div>
          

          {#each apiChallengeData.slice(3, 9) as { id, challenge, icon }}
            <div class="m-5 bg-zinc-300 justify-center mb-10 pb-1 text-white">
              <div class="w-full flex bg-indigo-800">
                <div class="pl-3 h-5 text-sm font-bold">
                  Day {id-2}
                </div>
                <div class="flex justify-end w-11/12">
                  <div class="pl-3 h-5 text-sm font-bold flex">
                    You
                  </div>
                  <div class="pl-3 h-5 text-sm font-bold right-3 flex ">
                    Stranger
                  </div>
                </div>
              </div>
              <div class="justify-center">
                <div class="bg-indigo-500 h-16 m-3">
                  <div class="p-2 flex w-full">
                    <div class="flex">
                      <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">
                        <div class="p-1">{id}</div>
                      </div>
                      <div class="Rectangle72 w-12 h-12 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">
                        <div class="p-1">{icon}</div>
                      </div>
                    </div>
                    <div class="w-full text-black max-h-16 m-1 p-0.5 bg-white bg-opacity-50 rounded-2xl">
                      {challenge}
                    </div>
                    <div class="">
                      <div class="flex float-right">
                        {#if completedChallenges[id]}
                         <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">✔️</div>
                          {:else}
                        <button on:click={() => completeChallenge(userId, id)}>
                          <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center"></div>
                        </button>
                      {/if}
                      {#if completedChallengesMatch[id]}
                      <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center">✔️</div>
                       {:else}
                       <div class="Rectangle72 w-12 h-12 mr-2 bg-white rounded-2xl text-black text-3xl font-bold flex justify-center"></div>
                   {/if}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
          {/if }
            
        </div>
      </div>
    </div>
  </body>
  
  <style>
  </style>
  