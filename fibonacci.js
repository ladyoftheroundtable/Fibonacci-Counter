let startTime = 0;
let a = 1n;
let b = 1n;
let runTime = 1000;
let timeElapsed = 0;
let currentTime = 0;
let temp = 0;
let iterations = 1000;
let fIndex = 0;
let maxFNumber = 0;
let maxFIndex = 0;

for (let i = 0; i < iterations; i++)
{
    startTime = performance.now();
    while (runTime >= timeElapsed)
    {
        temp = a;
        a = a + b;
        b = temp;
        

        /* 
        a = a + b;
        a = a ^ b;
        b = b ^ a;
        a = a ^ b;
        */
        currentTime = performance.now();
        timeElapsed += currentTime - startTime;
        /*
        if (a == Infinity)
        {
            console.log(b);.h
            console.log(timeElapsed);
            break;
        }
            */
        ++fIndex;
    }
    if (fIndex > maxFIndex)
    {
        maxFIndex = fIndex;
        maxFNumber = a;
    }

    console.log(timeElapsed);
    console.log(fIndex);

    timeElapsed = 0;
    fIndex = 0;
    a = 1n;
    b = 1n;
    console.log(i);
}

console.log(maxFIndex);
console.log(maxFNumber);