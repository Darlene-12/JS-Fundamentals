const arg = parseInt(process.args[2]);

if (isNaN(arg)) {
    console.log("Not a number");
}
else {
    console.log(`My number: ${arg}`);
}