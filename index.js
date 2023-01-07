const myEmoji = ["🧑‍🎓", "🧑‍💻","🕵️‍♂‍"]
const emojiContainer = document.getElementById("emoji-container")

for(let i = 0; i<myEmoji.length;i++){
 const emojis = document.createElement('span')
 emojis.textContent = myEmoji[i]
 emojiContainer.append(emojis)
}

const emojiBtn = document.getElementById("emoji-btn")
emojiBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    console.log(emojiInput.value)
})