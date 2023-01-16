let user = {
  name: "John",
  surname: "Smith",
};
Object.defineProperty(user, "fullname", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});
console.log(user.fullname);
