
//If statment
// if(myAge >= 18 ){
//     message = 'You can vote'
// } else {
//     message = 'You cannot vote - sorry'
// }




// const myAge = 100
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote - sorry'
// console.log(message)



const drivingAge = 16
const drivingPage = () => {
    return 'Show the driving page'
}
const showErrorPage = () => {
    return 'Display Error Page'
}

const message = drivingAge >= 16 ? drivingPage() : showErrorPage()
console.log(message)


//Team Players Challenge

//Short way 
const team = ['Peter', 'Paul', 'David']
const teamMessage1 = team.length <= 4 ? 'You Team is too Big' : 'Your Team is fine'
console.log(teamMessage1)


//Another way
const bigTeam = () => {
    return 'Your Team is too big'
}
const smallTeam = () =>{
    return 'Your Team is fine'
}
const teamMessage = team.length <= 4 ? bigTeam() : smallTeam()
console.log(teamMessage)

//Could do it this way
const team02 = ['Peter', 'Paul', 'David']
//Just use a console.log
console.log(team02.length <= 4 ? `Team Size: ${team02.length}` : 'Your team is too big' )

