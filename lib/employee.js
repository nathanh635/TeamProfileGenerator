function Employee(name, id, email) {
    this.name = name;
    if (typeof this.name !== 'string' || !this.name.trim().length) {
        throw new Error("Expected parameter 'name' to be a non empty string");
      }

    this.id = id;
    if (this.id ==="") {
        throw new Error("No ID number provided");
      }
    this.email = email;
    if (this.email ==="") {
        throw new Error("No email address provided");
      }

      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (this.email.match(validRegex)) {
      
        } else {
            throw new Error("Email must be in appropriate format!");
        }
      
      
    this.getName = () => {
        return this.name;
    };
    this.getId = () => {
        return this.id;
    };
    this.getEmail = () => {
        return this.email;
    };
    this.getRole = () => {
        return "Employee";
    };

}
module.exports = Employee;