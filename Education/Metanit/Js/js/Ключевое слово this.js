
function foo(){
    var bar = "bar2";
    console.log(this.bar);
}
 
var o3 = {bar:"bar3", foo: foo};
var o4 = {bar:"bar4", foo: foo};
 
var bar = "bar1";
 
foo();  // bar1
o3.foo();   // bar3
o4.foo();   // bar4
