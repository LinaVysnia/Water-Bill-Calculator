// level 1 first 6kl rost 15.75 per kl
// level 2 then from 6 to 10.5 it costs 22.38
// level 3 from 10.5 to 35 it costs 31.77
// level 4for anything above 35 it costs 69.75

usedWater = Number(prompt("How many liters have you used this month? "));
// let usedWater = 40000;

// working with kl will make it easier
usedWater = usedWater / 1000;

// I've decided to add a variable specificly to track how much ater there is left to account for
unaccountedWater = usedWater;

console.log(`The total amount of kl of water to pay for ${unaccountedWater}`);

let level4 = 0;
let level3 = 0;
let level2 = 0;
let level1 = 0;



if (unaccountedWater > 35) {
    level4 = (unaccountedWater - 35) * 69.75
    console.log(`There are ${unaccountedWater - 35} kl of water in level 4. 
                It will cost ${unaccountedWater - 35} * 69.75 which is ${level4}`);
    unaccountedWater = unaccountedWater - (unaccountedWater - 35);
    console.log(`The remaining water to account for is ${unaccountedWater} kl.`);
}

if (unaccountedWater > 10.5) {
    level3 = (unaccountedWater - 10.5) * 31.77;
    console.log(`There are ${unaccountedWater - 10.5} kl of water in level 3. 
                It will cost ${unaccountedWater - 10.5} * 31.77 which is ${level3}`);
    unaccountedWater = unaccountedWater - (unaccountedWater - 10.5);
    console.log(`The remaining water to account for is ${unaccountedWater} kl.`);
}

if (unaccountedWater > 6) {
    level2 = (unaccountedWater - 6) * 22.38;
    console.log(`There are ${unaccountedWater - 6} kl of water in level 2. 
                It will cost ${unaccountedWater - 6} * 22.38 which is ${level2}`);
    unaccountedWater = unaccountedWater - (unaccountedWater - 6);
    console.log(`The remaining water to account for is ${unaccountedWater} kl.`);
}

level1 = unaccountedWater * 15.73;
console.log(`There are ${unaccountedWater} kl of water in level 1. 
            It will cost ${unaccountedWater} * 15.73 which is ${level1}`);
unaccountedWater = unaccountedWater - unaccountedWater;
console.log(`The remaining water to account for is ${unaccountedWater} kl.`);

console.log(`The total amount of rands(R) to pay is ${level1 + level2 + level3 + level4}`);