const myEmoji = ["🧑‍🎓", "🧑‍💻","🕵️‍♂‍"]
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis(){
    emojiContainer.innerHTML = ""
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
        renderEmojis()
        console.log(emojiInput.value)
    }
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value){
        myEmoji.unshift(emojiInput.value)
        emojiInput.value =""
        renderEmojis()
}
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function () {
        myEmoji.pop()
        renderEmojis()
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function () {
        myEmoji.shift()
        renderEmojis()
})