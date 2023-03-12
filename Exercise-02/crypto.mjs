
import * as Crypto from 'crypto';

const randomID = () => {
    return Crypto.randomBytes(5 , (x, a) => {
        if(x) throw new Error;
        const id = a.toString('hex');
        console.log(`RANDOM ID: ${id}`)
    })
}

randomID();