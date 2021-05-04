const array = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
ms = 100;
for (const char of array) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, ms);
  ms += 200;
}
