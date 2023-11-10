// check that user with given name exists 
const users = [
    {
      id: 1,
      name: "Jack",
      
    },
    {
      id: 2,
      name: "Jocko",
      
    },
    {
      id: 3,
      name: "Jack",
      
    }
  ]
  
  function userExists(array, name){
    return array.map((user) => user.name === name).includes(true)
  }
  
  console.log(userExists(users, 'Jack'))