// fetch("users.json")
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (json) {
//     console.log(json);
//     for (let user of json) {
//       console.log(`I'm ${user.name}, ${user.age} years old`);
//     }
//   });

// fetch("users.json")
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (json) {
//     console.log(json);
//     for (let user of json) {
//       console.log(`I'm ${user.name}, ${user.age} years old`);
//     }
//   });

async function fetchUsers() {
  const response = await fetch("users.json");
  console.log(response);
  const json = await response.json();
  for (let user of json) {
    console.log(`I'm ${user.name}, ${user.age} years old`);
  }
}

fetchUsers().then(function () {
  setTimeout(function () {
    console.log("hello");
  }, 3000);
});
