import figlet from 'figlet';

figlet("iTzRusso10", (err, data) => {
    if(err){
        console.log("Something went wrong");
        return;
    }
    console.log(data)
})