function randomInteger() {
    return Math.floor(Math.random() * 30);
}
randomInteger();
console.log(randomInteger(0, 30));
module.exports = randomInteger;