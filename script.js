paraDisplay = document.getElementById("paracontainer");
const inputField = document.getElementById('input');
const submitbtn = document.getElementById("submit-btn");
const statDisplay = document.getElementById('stats');
let startTime;
const paras = [
    "A bright rainbow arches across the sky after the rain, its vivid colors illuminating the landscape and filling everyone’s hearts with wonder and joy.",
    "The soft purr of a cat curled up on the couch creates a sense of peace, offering comfort and reminding us of life’s simple, quiet pleasures.",
    "A crisp autumn morning fills the air with coolness, as golden leaves fall gently to the ground, creating a picturesque scene of nature’s changing seasons.",
    "The library whispers with quiet activity, shelves brimming with stories and knowledge, inviting readers to lose themselves in worlds both real and imagined.",
    "The campfire crackles softly, casting dancing shadows on faces as friends share stories, laughter, and moments that will be cherished forever under the starlit sky.",
    "A garden blooms with vibrant flowers, their colors painting the earth in beauty while bees and butterflies buzz softly, celebrating the richness of nature’s gifts.",
    "Waves crash rhythmically against the rocky shoreline, their soothing sound mingling with the salty sea breeze, creating a tranquil escape from the world’s chaos.",
    "The aroma of fresh bread fills the kitchen, its golden crust promising warmth and nourishment, while the anticipation of sharing it with loved ones grows stronger.",
    "The morning sun breaks through the misty forest, its rays illuminating the dewdrops on leaves, creating a serene and magical start to a peaceful day.",
    "A quiet street at dawn hums with possibility, as the first rays of sunlight stretch across the city, waking it gently from its slumber.",
    "The thunderstorm roars outside, while inside, the cozy warmth of a blanket and a good book make the wild weather feel distant and comforting.",
    "The clock ticks softly in the silent room, each second a reminder that time moves steadily forward, carrying us closer to our goals and dreams.",
    "Children’s laughter echoes in the park as they chase each other, their joy unbridled, a testament to the boundless energy and wonder of childhood.",
    "Snowflakes drift lazily from the sky, each unique and intricate, transforming the world into a winter wonderland, inviting quiet reflection and playful exploration alike.",
    "The river flows gently under the wooden bridge, its surface sparkling in the sunlight, while the soothing sound of water brings peace to the surroundings.",
    "A star twinkles brightly in the vast night sky, a tiny beacon of light that inspires dreams and reminds us of the infinite mysteries of space.",
    "A fresh breeze carries the scent of blooming jasmine, filling the evening air with sweetness and hinting at the arrival of a serene summer night.",
    "The moon casts its soft glow over the still lake, reflecting perfectly on its surface, creating a serene moment of beauty and tranquility under the stars.",
    "The first sip of morning coffee invigorates the senses, its bold aroma and rich flavor providing the energy needed to tackle whatever challenges lie ahead.",
    "A gentle rain taps against the window, its rhythm soothing and steady, while the world outside becomes a blur of gray, quiet, and contemplation.",
    "Leaves crunch underfoot during a crisp autumn walk, their earthy scent mingling with the cool air, creating an invigorating connection with the changing season’s charm.",
    "The beach stretches endlessly, its golden sands warmed by the sun as waves roll gently ashore, creating a soothing melody that lulls the heart to peace.",
    "The forest trail winds through towering trees, their leafy canopy creating dappled light that dances on the ground, inviting explorers to lose themselves in nature’s embrace.",
    "The cozy café hums with quiet chatter, the aroma of freshly brewed coffee wafting through the air, creating a warm, inviting atmosphere for work and relaxation.",
    "Fireflies twinkle in the dark summer night, their tiny lights flickering like stars on Earth, creating an enchanting scene that feels both magical and fleeting."
  ];
  


inputField.focus();

const randomPara = () =>{
    let text = paras[Math.floor(Math.random()*25)];
    return text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]’^_`{|}~]/g, "").toLowerCase();
}

let newText = randomPara();
paraDisplay.textContent = newText;

inputField.addEventListener("input",()=>{

    if(!startTime) startTime = new Date();
    
    if(paraDisplay.textContent.startsWith(inputField.value)){

        inputField.classList.remove("text-red-500");
    }
    else{

        inputField.classList.add("text-red-500")
    }
    if(paraDisplay.textContent === inputField.value){
        inputField.classList.add('hidden')
        paraDisplay.classList.add("hidden")
        statDisplay.classList.remove('hidden')
        const endTime = new Date();
        const timeElapsed = (endTime - startTime)/1000;
        const words  = paraDisplay.textContent.split(" ").length;
        const wpm = Math.round((words/timeElapsed)*60);
       statDisplay.innerHTML = `
            <p class="text-center text-3xl font-bold mb-5">🎉 well done</p>
            <div id="stats-data">
                <h1 class="text-2xl font-bold mb-2">Typing speed: <span class="text-4xl text-green-500">${wpm}</span> wpm</h1>
                <h1 class="text-2xl font-bold mb-3">Total time taken: <span class="text-4xl text-green-500">${Math.round(timeElapsed)}s</span></h1>
            </div>
          <button class="bg-green-500 px-3 py-2 text-xl text-white font-bold rounded-md shadow-md" onclick="refreshpg()">Replay</button>
       `
    }
})
function refreshpg(){
    location.reload();
}

