const users = [{
    name:"varun",
    kidneys:[{healthy:false},{healthy:true}]
}];

for(let i = 0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy == false){
        delete users[0].kidneys[i];
    }
}

console.log(users[0].kidneys)