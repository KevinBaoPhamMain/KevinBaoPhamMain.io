let ListAchievements = [
    "ACSL", 
    "Teacher, I am not gaming!"
    ]
let ListDescription = [
    "ABCSCIHASCHACHAHDWLIDHAWDHLIADI",
    "First game made in Unity"
    ]
let ListImage = [
    "Assets/Achievements/PHAMGIABAO.jpg",
    "Assets/Achievements/TEACHER.png"
    ]

let BlankHTML = ""

for (let i = 0 ; i < ListAchievements.length; i++){
    let BasedExam = `<div class='AcBlock'> \n <img src='${ListImage[i]}'> \n <p>${ListAchievements[i]}</p> \n <p>${ListDescription[i]}</p> \n </div>`
    BlankHTML += BasedExam
}
    
document.getElementById("AchievementBlocks").innerHTML = BlankHTML