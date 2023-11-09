
// this keyword 

const Candidate = {
  name: 'Sime',
  age: '22',
  printStudentInfo: function(){
    console.log(`${this.name} age is ${this.age} so he can join the team `)
  }
}

Candidate.printStudentInfo()