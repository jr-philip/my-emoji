const myEmoji = ["🧑‍🎓", "🧑‍💻","🕵️‍♂‍"]
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis(){
    for (let i = 0; i < myEmoji.length; i++) {
        const emojis = document.createElement('span')
        emojis.textContent = myEmoji[i]
        emojiContainer.append(emojis)
}
}

const emojiBtn = document.getElementById("emoji-btn")
emojiBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value){
        myEmoji.push(emojiInput.value)
        emojiInput.value = ""
        emojiContainer.innerHTML = ""
        renderEmojis()
        console.log(emojiInput.value)
    }
})