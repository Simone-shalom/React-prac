
var student = {
    name : 'Simone',
    displayName: function(sth){
      console.log(this.name + sth)
    }
  }
  
  // student.displayName()
  
  var teacher = {
    name: "Andrew",
  }
  
  //call
  student.displayName.call(teacher, 'Yooo')
  //apply
  student.displayName.apply(teacher, ['Yooo2'])
  //bind
  const newFn = student.displayName.bind(teacher)
  newFn('Yooo3')
  