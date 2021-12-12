const fs = require('fs');
const { createCanvas } = require('canvas');

const arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
permut(arr, "", arr.length, 6);

function permut(arr,prefix,n,k)
{

    if (k === 0)
    {
        const canvas = createCanvas(100, 100);
        const context = canvas.getContext('2d');
        context.fillStyle = `#${prefix}`;
        context.fillRect(0, 0, 100, 100);
        const buffer = canvas.toBuffer('image/png');

        fs.writeFileSync(`./img/#${prefix}.png`, buffer);
        return;
    }

    for (let i = 0; i < n; i++)
    {
        let np = prefix + arr[i];
        permut(arr, np, n, k - 1);
    }
}