let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(newCat) {
   let copyCats = cats.slice();
   copyCats.push(newCat);
   return copyCats;
}

function prependCat(newCat2) {
    let copyCats2 = cats.slice();
    copyCats2.unshift(newCat2);
    return copyCats2;
}

function removeLastCat() {
    let copyCats2 = cats.slice(); // This copies the array
    copyCats2.pop();
    return copyCats2;
}

function removeFirstCat() {
    let copyCats2 = cats.slice();
    copyCats2.shift();
    return copyCats2;
}