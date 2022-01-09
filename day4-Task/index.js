//How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };


//comparing two objects whose order are not same passing two objects in the argumebnt
function noOrder(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if(obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            if(typeof obj1[objKey] == "object" && typeof obj2[objKey] == "object") {
                if(!isEqual(obj1[objKey], obj2[objKey])) {
                    return false;
                }
            } 
            else {
                return false;
            }
        }
    }

    return true;
}
console.log(noOrder(obj1,obj2));


//2. REST COUNTRIES
const getcountries=()=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType="json"
    xhr.onload=()=>{
        const countries = xhr.response;
    //country Flag is printing in console
const PrintFlag = countries.map((fla)=>console.log(fla.flag))
//country details are printing namr,capital ,region

const countryDetail = countries
.map((n)=>{
    return console.log("Contry Name :",n.name.common,"  Region :",n.region,"Sub-Region :",n.subregion,"Population : ",n.population);


})



    }
}
getcountries()
