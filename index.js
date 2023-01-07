const myEmoji = ["🧑‍🎓", "🧑‍💻","🕵️‍♂‍"]
const emojiContainer = document.getElementById("emoji-container")

for(let i = 0; i<myEmoji.length;i++){
 const emojis = document.createElement('span')
 emojis.textContent = myEmoji[i]
 emojiContainer.append(emojis)
}