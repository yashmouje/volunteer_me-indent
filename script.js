function formSubmit() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let address = document.getElementById("address").value;
  let resumeLink = document.getElementById("resume").value;
  localStorage.setItem("first_name", firstName);
  localStorage.setItem("last_name", lastName);
  localStorage.setItem("email_address", email);
  localStorage.setItem("phone_Number", phoneNumber);
  localStorage.setItem("personal_address", address);
  localStorage.setItem("resume_link", resumeLink);
  console.log(
    localStorage.getItem("first_name") + " " + localStorage.getItem("last_name")
  );
}
