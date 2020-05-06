for (let i = 1; i < 11; i = i + 1) {
    console.log(i);
}

for (let i = 10; i > 0; i = i - 1) {
    console.log(i);
}

let i = 1;

while (i < 11) {
    console.log(i++);
}

i = 10;

while (i > 0) {
    console.log(i--);
}

i = 1;

do {
    console.log(i++);
}
while (i < 11);

i = 10;

do {
    console.log(i--);
}
while (i >0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of numbers) {
    console.log(number);
}