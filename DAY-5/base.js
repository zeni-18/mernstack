console.log("First");
setTimeout(() => {
    console.log("This runs after");
},5000)
console.log("end");

console.log("Wake up");
setTimeout(()=>{
    console.log("Bath");
},2000)
console.log("Brush");

let icecreamPromise = new Promise((resolve,reject)=>{
    let icecreamReady = true;
    if(icecreamReady){
        resolve("Ice cream is ready");
    }else{
        reject("No Ice cream today");
    }
});
icecreamPromise
    .then((message)=>{
        console.log("Yay!"+message);
    })
    .catch((error)=>{
        console.log("oops!"+error);
    })

async function getIcecream() {
    try{
        let message = await icecreamPromise;
        console.log( "Yay!" + message ); 
    }catch(error){
        console.log(" Oops! "+ error);
    }
}
getIcecream

const [a,b,c] = [10,20,30];
console.log(a);
console.log(b);
console.log(c);

const [first,...rest] = [1,2,3,4,5];
console.log(first);
console.log(rest);

const user ={ name : "Zeni",age : 19};
const{ name,age} = user;
console.log(name);
console.log(age);

function greet({name,age}){
    console.log(`Hello ${name},you are ${age} years old`);
}
greet({
    name:"Zeni",
    age:19
})