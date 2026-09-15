let ListAchievements = [
    "ACSL Top 5% Certificate, 2020-2021", 
    "Teacher, I am not gaming!"
    ]
let ListDescription = [
    "This is my certificate for being top 5% in ACSL (American Compute Science Leauge) back in 2020-2021. It was my first time competiting against others in a computer science tournament",
    "This is my first game being published on itch.io."
    ]
let ListImage = [
    "Assets/Achievements/PHAMGIABAO.jpg",
    "Assets/Achievements/TEACHER.png"
    ]

let BlankHTML = ""

for (let i = 0 ; i < ListAchievements.length; i++){
    let BasedExam = `
        <div class='AcBlock card h-100'>
            <img src='${ListImage[i]}' alt='${ListAchievements[i]}' class='card-img-top'>
            <div class='card-body'>
                <p class='fw-bold'>${ListAchievements[i]}</p>
                <p>${ListDescription[i]}</p>
            </div>
        </div>
    `
    BlankHTML += BasedExam
}
    
document.getElementById("AchievementBlocks").innerHTML = BlankHTML