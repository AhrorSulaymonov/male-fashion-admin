document.getElementById("adduser").addEventListener("click", function () {
  const name = document.getElementById("exampleInputName1").value;
  const surname = document.getElementById("exampleInputSurname1").value;
  const phone = document.getElementById("exampleInputPhone1").value;
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  const data = {
    name: name,
    surname: surname,
    phone: phone,
    email: email,
    password: password,
  };

  fetch("http://45.138.158.157:3030/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("User successfully added!");
        document
          .getElementById("adduser")
          .addEventListener("click", function () {
            // Modalni yopish
            const modal = new bootstrap.Modal(
              document.getElementById("exampleModal")
            );
            modal.hide();
            // Modal inputlarini tozalash
            document.getElementById("exampleInputName1").value = "";
            document.getElementById("exampleInputSurname1").value = "";
            document.getElementById("exampleInputPhone1").value = "";
            document.getElementById("exampleInputEmail1").value = "";
            document.getElementById("exampleInputPassword1").value = "";
          });
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
      alert("An error occurred. Please try again.");
    });
});

function removeUser(userId) {
  if (confirm("Haqiqatan ham ushbu foydalanuvchini o'chirmoqchimisiz?")) {
    fetch(`http://45.138.158.157:3030/api/users/${userId}`, {
      method: "DELETE",
      mode: "cors",
    })
      .then((response) => {
        if (response.ok) {
          alert("Foydalanuvchi muvaffaqiyatli o'chirildi.");
          // O'chirilib bo'lgandan keyin sahifani yangilash
          location.reload();
        } else {
          console.log("userId", userId);

          alert("Xatolik yuz berdi. Foydalanuvchi o'chirilmadi.");
        }
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        alert("Xatolik yuz berdi. Foydalanuvchi o'chirilmadi.");
      });
  }
}

document.getElementById("updateButton").addEventListener("click", async () => {
  // Modal ichidagi inputlardan ma'lumotlarni olish
  const userId = document.getElementById("exampleID1").value;
  const name = document.getElementById("exampleInputName1").value;
  const surname = document.getElementById("exampleInputSurname1").value;
  const phone = document.getElementById("exampleInputPhone1").value;
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  // PUT so'rovga yuboriladigan ma'lumotlar obyektini yaratish
  const userData = {
    name: name,
    surname: surname,
    phone: phone,
    email: email,
    password: password,
  };

  try {
    console.log(`http://45.138.158.157:3030/api/users/${userId}`);

    // PUT so'rovni yuborish
    const response = await fetch(`http://45.138.158.157:3030/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Server javobini tekshirish
    if (response.ok) {
      const result = await response.json();
      console.log("User updated successfully:", result);
      alert("User updated successfully!");
      document
        .getElementById("updateButton")
        .addEventListener("click", function () {
          // Modalni yopish
          const modal = new bootstrap.Modal(
            document.getElementById("exampleModal")
          );
          modal.hide();
          // Modal inputlarini tozalash
          document.getElementById("exampleID1").value = "";
          document.getElementById("exampleInputName1").value = "";
          document.getElementById("exampleInputSurname1").value = "";
          document.getElementById("exampleInputPhone1").value = "";
          document.getElementById("exampleInputEmail1").value = "";
          document.getElementById("exampleInputPassword1").value = "";
        });
    } else {
      console.error("Failed to update user:", response.statusText);
      alert("Failed to update user. Please try again.");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    alert("An error occurred. Please try again later.");
  }
});
