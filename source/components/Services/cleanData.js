let FilterData = require('./filter_data3.json');

for(let i in FilterData){
  FilterData[i] = false;
}

console.log(JSON.stringify(FilterData));

