// code your solution here
function saturdayFun(activity="roller-skate"){
   return(`This Saturday, I want to ${activity}!`);

}

function mondayWork(activity="go to the office"){
    return(`This Monday, I will ${activity}.`)

}


// function wrapAdjective(a="*") {
//     console.log(a)
//     const inner = function(a) {
//         return `You are ${a}${a}!`
//     }
//     return inner
// }

function wrapAdjective(work="*") {
    return function innerFunction(part1 = "special") {
        return (`You are ${work}${part1}${work}!`)
    }
        
}
wrapAdjective();