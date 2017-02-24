
/* Closures are when you have a function in a function.
 *  - function stack frame are "kept in memory"
 *  - functions variables are linked to closure in which it was created
 *  - therefore functions created in the same closure share local variables (for loop example)
 */

function counter(){
  var count = 0;
  var increment = function(){
    count++;
    console.log(count);
    return count;;
    
  }
  return increment;
}

var counter1 = counter();
counter1(); // 1
counter1(); // 2
counter1(); // 3

var counter2 = counter();
counter2(); // 1
counter1(); // 4
counter2(); // 2

function listCounter(list){
  var result = [];
  for(i = 0; i < list.length; i++){
    var name = 'item' + i;
    var value = list[i];
    result.push(function(){
       console.log(name, value);
    });
  }
  return result;
}

var functions = listCounter([1, 2, 3]);
for(var i = 0; i < functions.length; i++){
  functions[i]();
}
// item2 undefined
// item2 undefined
// item2 undefined


