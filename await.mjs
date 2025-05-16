async function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults() {
  try {
    const tina = await luckyDraw("Tina");
    console.log(tina);
  } catch (error) {
    console.log(error.message);
  }

  try {
    const jorge = await luckyDraw("Jorge");
    console.log(jorge);
  } catch (error) {
    console.log(error.message);
  }

  try {
    const julien = await luckyDraw("Julien");
    console.log(julien);
  } catch (error) {
    console.log(error.message);
  }
}

getResults();
