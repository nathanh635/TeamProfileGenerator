const Employee = require('../lib/employee.js');


describe('Employee', () => {
    describe('Initialization', () => {
    it('should create an object with name, ID, and email', () => {
        const employee = new Employee("Steve", 22, "steve@steveshouse.com");

        //asserting that should create object if these values are passed in
        expect(employee.name).toEqual("Steve");
        expect(employee.id).toEqual(22);
        expect(employee.email).toEqual("steve@steveshouse.com");
      });
    });

    it("should throw an error if not provided a 'text' value for name", () => {
      // Arrange
      const cb = () => new Employee();
      const err = new Error(
        "Expected parameter 'name' to be a non empty string"
      );

      // Assert
      expect(cb).toThrowError(err);
      });

      it("should throw an error if email is not in the correct format", () => {
        // Arrange
        const cb = () => new Employee("Steve", 22, "steve");
        const err = new Error(
          "Email must be in appropriate format!"
        );
  
        // Assert
        expect(cb).toThrowError(err);
        });

    describe('getRole', () => {
        it('should return the role of the employee as "employee"', () => {
            const employee = new Employee("Steve", 22, "steve@steveshouse.com");
    
            expect(employee.getRole()).toEqual("Employee");
          });
        });
    describe('getName', () => {
         it('should return the name of the employee', () => {
            const employee = new Employee("Steve", 22, "steve@steveshouse.com");
        
            expect(employee.getName()).toEqual("Steve");
            });
        });
    describe('getID', () => {
        it('should return the ID of the employee', () => {
             const employee = new Employee("Steve", 22, "steve@steveshouse.com");
            
            expect(employee.getId()).toEqual(22);
            });
        });
    describe('getEmail', () => {
            it('should return the email of the employee', () => {
                const employee = new Employee("Steve", 22, "steve@steveshouse.com");
                
                expect(employee.getEmail()).toEqual("steve@steveshouse.com");
                });
            });

    });
  