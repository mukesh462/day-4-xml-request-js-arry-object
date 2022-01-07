var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log(obj1);
console.log("name :",obj2.name,"age :",obj2.age);


//2. REST COUNTRIES
const getcountries=()=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType="json"
    xhr.onload=()=>{
        const countries = xhr.response;
    
const PrintFlag = countries.map((fla)=>console.log(fla.flag))
const countryDetail = countries
.map((n)=>{
    return console.log("Contry Name :",n.name.common,"  Region :",n.region,"Sub-Region :",n.subregion,"Population : ",n.population);


})



    }
}
getcountries()
