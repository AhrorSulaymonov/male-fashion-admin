// document.getElementById("savechanges").addEventListener("click", function () {
//   const name = document.getElementById("exampleInputName1").value;
//   const surname = document.getElementById("exampleInputSurname1").value;
//   const phone = document.getElementById("exampleInputPhone1").value;
//   const email = document.getElementById("exampleInputEmail1").value;
//   const password = document.getElementById("exampleInputPassword1").value;

const data = {
  name: "name",
  surname: "surname",
  phone: "phone",
  email: "email123@gmail.com",
  password: "password",
};

fetch("http://127.0.0.1:3030/api/users/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    if (response.ok) {
      console.log("User successfully added!");
      return response.json();
    } else {
      throw new Error("Failed to add user.");
    }
  })
  .then((responseData) => {
    console.log("Response:", responseData);
  })
  .catch((error) => {
    console.error("Error:", error);
    console.log(error);
    console.log("An error occurred. Please try again.");
  });
// });
