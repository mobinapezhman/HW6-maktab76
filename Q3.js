user = {
    id: 6, name: "Hossein", lastName: "Zenderoh",
    roles: ["student", "admin"],
    age: 12,
    scores: { english: 10, math: 19.5, physics: 14 },
  };

  
//q1
    
  
  function newScore(lesson, score) {
    user.scores[lesson] = score;
    return user
  }
  
  console.log(newScore("varzesh",20))


  //q2

  
  function newRole(role) {
    user.age < 18 ? user.status = "veryyoung" : user.roles.push(role);
    return user
  }
  
  console.log(newRole("Teacher"));
  
  
  //q3
  
  
  const userArrayDataType = Object.entries(user)
  userArrayDataType.push(["fatherName","ali"])
  
  console.log(userArrayDataType);
  
  // conver the array to object
  const converArrToObject = Object.fromEntries(userArrayDataType)
  console.log(converArrToObject)