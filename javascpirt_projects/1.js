let user = {
  firstName: "Вася",
};

function func() {
  console.log(this.firstName);
}

let funcUser = func();
funcUser();
