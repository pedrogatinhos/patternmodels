// function Person2(firstName, lastName, age) {
  
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age, 

//   this.fala = () => console.log('nada')
  
// }
// let p1 = new Person2('pedro', 'henrique', 18)

// p1.fala();

class Person2 {
  
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
    this.andar = function(){
    console.log("estou andando")
  }
}
 fala(){console.log(this.age)}

}

const p1 = new Person2('pedro','henrique', 18)
const p2 = new Person2('lucas', 'martins', 19)
p1.fala()
p2.fala()
p1.andar()
