const stocks = [
    {id:1,name:"Apple",values:[15,14,25,22,30,14]},
    {id:2,name:"Amazon",values:[10,14,29,8,30,15]},
    {id:3,name:"Google",values:[8,55,22,22,39,54]},
    {id:4,name:"Amdocs",values:[54,53,25,60,55,12]},
    {id:5,name:"Facebook",values:[15,54,25,72,90,77]},
    {id:6,name:"Tesla",values:[1,44,5,22,50,44]}
]

export function getStocks(){
    return stocks.filter( stock => stock );
}