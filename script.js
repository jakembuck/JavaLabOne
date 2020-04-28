const name = "Jake Buck"
const age = 26
const birthday = "April 19"
const detroitGC = true
const lifeEvents = ["I was born in Ypsilanti, Michigan", "I went to Detroit Catholic Central", "I went to France at 16 years old. I stayed for three weeks", "I'm a student of the front-end bootcamp."]

if (detroitGC === true) {
    Message = `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`;
    console.log(Message);
}
else {
    Message = `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`;
    console.log(Message);
}

for (let i = 0; i <= lifeEvents.length - 1; i++) {
    console.log(lifeEvents[i]);
}

// ugh
let counter = 0

while (true) {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    if (randomNumber != 5) {
        counter++;
        console.log(`${randomNumber} !==5`);
    } else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number`);
        break;
    }
};
