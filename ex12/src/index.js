function randomInteger() {
    return Math.floor(Math.random() * 30);
}

console.log(randomInteger(0, 30));
module.exports = randomInteger;