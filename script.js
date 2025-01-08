paraDisplay = document.getElementById("paracontainer");
const inputField = document.getElementById('input');
const paras = [
    "He had disappointed himself more than anyone else. That wasn't to say that he hadn't disappointed others. The fact was that he had disappointed a lot of people who were close to him. The fact that they were disappointed in him was something that made him even more disappointed in himself. Yet here he was, about to do the exact same things that had caused all the disappointment in the first place because he didn't know what else to do.",
    "Twenty-five years Dana had been waiting. She tried to be patient during that time but she hadn't always managed to be as patient as she'd like. But today the opportunity had finally come. The thing she always imagined would make her the happiest person in the world was about to happen. She didn't know why at this specific time she all of a sudden felt sick inside.",
    "He slowly poured the drink over a large chunk of ice he has especially chiseled off a larger block. He didn't particularly like his drinks cold, but he knew that the drama of chiseling the ice and then pouring a drink over it looked far more impressive than how he actually liked it. It was all about image and he'd managed to perfect the image that he wanted to project.",
    "The choice was red, green, or blue. It didn't seem like an important choice when he was making it, but it was a choice nonetheless. Had he known the consequences at that time, he would likely have considered the choice a bit longer. In the end, he didn't and ended up choosing blue.",
    "Was it enough? That was the question he kept asking himself. Was being satisfied enough? He looked around him at everyone yearning to just be satisfied in their daily life and he had reached that goal. He knew that he was satisfied and he also knew it wasn't going to be enough."
];


inputField.focus();

const randomPara = () =>{
    let text = paras[Math.floor(Math.random()*5)];
    return text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase();
}

let newText = randomPara();
paraDisplay.textContent = newText;

inputField.addEventListener("keydown",()=>{

    const startTime = new Date();
    const isCorrect = inputField.value.startsWith(newText);
    if(!isCorrect){
        inputField.classList.add("text-red-500");
    }
    else{
        inputField.classList.remove('text-red-500');
    }
    
})