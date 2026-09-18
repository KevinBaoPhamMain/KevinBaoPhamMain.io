let AchieveList = [
    ["ACSL Top 5% Certificate, 2020-2021",
    "This is my certificate for being top 5% in ACSL (American Compute Science Leauge) back in 2020-2021. It was my first time competiting against others in a computer science tournament",
    "Assets/Achievements/PHAMGIABAO.jpg"],
    
    ["Teacher, I am not gaming!",
    "This is my first game being published on itch.io.",
    "Assets/Achievements/TEACHER.png"
    ]

]

let BlankHTML = ""

for (let i = 0 ; i < AchieveList.length; i++){
    let BasedExam = `
        <div class='AcBlock card h-100'>
            <img src='${AchieveList[i][2]}' alt='${AchieveList[i][0]}' class='card-img-top'>
            <div class='card-body'>
                <p class='fw-bold'>${AchieveList[i][0]}</p>
                <p>${AchieveList[i][1]}</p>
            </div>
        </div>
    `
    BlankHTML += BasedExam
}
    
document.getElementById("AchievementBlocks").innerHTML = BlankHTML