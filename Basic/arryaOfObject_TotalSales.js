const getTotalSales = users => {
    // let totalValue=0;
    // users.forEach(user=> {
    //     totalValue+= user?.subscription?.info.value ??0
    // })
    // return totalValue;
    //current.subscription ? current.subscription.info ? current.subscription.info.value : 0 : 0;  
    //Optional Chaining is not supported in VS code.
    //current?.subscription?.info?.value??0 

    const sum = users.reduce((total, current) => { 
        let currentValue = current? current.subscription? current.subscription.info? current.subscription.info.value : 0:0:0
    return total + currentValue;
    }, 0);
       return sum;
}

// Sample usage - do not modify
const users = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Sam", subscription: {info: {value: 59}}},
    {id: 3, name: "Charlie", subscription: {info: {value: 31}}}
];
console.log(getTotalSales(users)); // 90