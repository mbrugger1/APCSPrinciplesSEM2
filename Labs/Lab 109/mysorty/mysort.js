var txt = []
var txt = for(var i = 0, i < number, i++);
var number = [20000]
var timer = milis();


function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }
  //remaining part needs to be added to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
console.log(txt);
console.log(timer);
