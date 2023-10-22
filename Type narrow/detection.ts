interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdimin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdimin" in account) {
   
    console.log("Admin Login succesfully");
    return account.isAdimin;
  }
  else {
    console.log(account.email);
    console.log("User Login succesfully");
    return account.email;   
  }
}


isAdminAccount({ name: "s", email: "is User" });  // true
isAdminAccount({ name: "Admin", email: "a@gmail.com", isAdimin: true });  // true
