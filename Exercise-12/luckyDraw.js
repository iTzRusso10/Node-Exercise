const clc = require('cli-color');

const luckyDraw = (player) => {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(clc.green(`${player} won a prize in the draw!`));
        } else {
          reject(clc.red((`${player} lost the draw.`)));
        }
      });
    });
  }

  luckyDraw("Joe")
  .then(res => console.log(res))
  .catch(rej => console.log(rej))
  luckyDraw("Sabrina")
  .then(res => console.log(res))
  .catch(rej => console.log(rej))
  luckyDraw("Caroline")
  .then(res => console.log(res))
  .catch(rej => console.log(rej))

  const agetResult = async (name) => {
    try{
      const res = await luckyDraw(name);
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

 agetResult("Tina")
 agetResult("Jorge")
 agetResult("Julien")