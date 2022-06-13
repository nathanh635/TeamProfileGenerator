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
    describe('getRole', () => {
        it('should return the role of the employee as "employee"', () => {
            const employee = new Employee("Steve", 22, "steve@steveshouse.com");
    
            //asserting that should create object if these values are passed in
            expect(employee.getRole()).toEqual("Employee");
          });
        });
    describe('getName', () => {
         it('should return the name of the employee', () => {
            const employee = new Employee("Steve", 22, "steve@steveshouse.com");
        
            //asserting that should create object if these values are passed in
            expect(employee.getName()).toEqual("Steve");
            });
        });
    describe('getID', () => {
        it('should return the ID of the employee', () => {
             const employee = new Employee("Steve", 22, "steve@steveshouse.com");
            
            //asserting that should create object if these values are passed in
            expect(employee.getId()).toEqual(22);
            });
        });
    describe('getEmail', () => {
            it('should return the email of the employee', () => {
                const employee = new Employee("Steve", 22, "steve@steveshouse.com");
                
                //asserting that should create object if these values are passed in
                expect(employee.getEmail()).toEqual("steve@steveshouse.com");
                });
            });

    });
  