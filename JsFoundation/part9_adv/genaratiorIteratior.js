function* numGen() {
    yield 1
    yield 2
    yield 3
}

let gen = numGen()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
