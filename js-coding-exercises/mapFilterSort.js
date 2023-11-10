
const users = [
    {
      id: 1,
      name: 'Jack',
      isActive: true,
      age: 20,
    },
    {
      id: 2,
      name: 'Sime',
      isActive: true,
      age: 30,
  
    },
    {
      id: 3,
      name: 'Johhny',
      isActive: false,
      age: 10,
  
    },
  ]
  //map users
  const names = users.map((user) => user.name)

  // filter users and display names
  const activeUsersN = users.filter((user) => user.isActive).map((user) => user.name)
  
  //sort users by age and display names
  const sortedByAge = users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1)).map((user) => user.name).reverse()

  console.log(names)
  console.log(activeUsersN)
  console.log(sortedByAge)
  