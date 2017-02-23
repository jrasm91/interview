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

// each instance of counter gets it's own copy of local variables
var counter2 = counter();
counter2(); // 1
counter1(); // 4
counter2(); // 2




