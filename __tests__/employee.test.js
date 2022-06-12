const Employee = require('../lib/employee.js');


describe('Employee', () => {
    describe('Initialization', () => {
    it('should create an object with return the number if not a multiple of three or five', () => {
        const employee = new Employee("Steve", 22, "steve@steveshouse.com");

        //asserting that should create object if these values are passed in
        expect(employee).toEqual({ name: "Steve", id: 22, email: "steve@steveshouse.com"});
      });
    });
    describe('getRole', () => {
        it('should return the role of the employee as "employee"', () => {
            const employee = new Employee("Steve", 22, "steve@steveshouse.com");
    
            //asserting that should create object if these values are passed in
            expect(employee).getRole().toEqual("Employee");
          });
        });
    describe('getName', () => {
         it('should return the name of the employee', () => {
            const employee = new Employee("Steve", 22, "steve@steveshouse.com");
        
            //asserting that should create object if these values are passed in
            expect(employee).getName().toEqual("Steve");
            });
        });
    describe('getID', () => {
        it('should return the ID of the employee', () => {
             const employee = new Employee("Steve", 22, "steve@steveshouse.com");
            
            //asserting that should create object if these values are passed in
            expect(employee).getID().toEqual(22);
            });
        });
    describe('getEmail', () => {
            it('should return the email of the employee', () => {
                const employee = new Employee("Steve", 22, "steve@steveshouse.com");
                
                //asserting that should create object if these values are passed in
                expect(employee).getEmail().toEqual("steve@steveshouse.com");
                employee.getEmail()
                });
            });

    });
  