const first_array=[3,1,7,9]
const second_array=[2,4,1,9,3]

 function Somme(tab){
    let sum = 0;
    for(let j=0; j< tab.length; j++){
             sum=sum+tab[j];
    }
    return sum
 }

function sum(a,b){
    var long = []
    var short = []
    var filtered = []
    var finalResult = []

    a.length > b.length ? long = a  : long = b 
    a.length < b.length ? short = a : short = b
    filtered = long
    short.forEach(element => {
       long.indexOf(element) > 0 ? 
             filtered = filtered.filter((ele) => ele !== element): finalResult  = [...filtered,element]    
    }
             ); 
    
      long.indexOf(short[short.length - 1]) ? 
            finalResult = finalResult.filter(ele => ele !== short[short.length - 1]) : null   
  
    return Somme(finalResult)
}

console.log(sum(first_array,second_array))
