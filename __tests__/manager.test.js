const Manager = require('../lib/manager.js');


describe('Manager', () => {
    describe('Initialization', () => {
    it('should create an object with name, id, email, and office number', () => {
        const manager = new Manager("Steve", 22, "steve@steveshouse.com", 112);

        //asserting that should create object if these values are passed in
        expect(manager.name).toEqual("Steve");
        expect(manager.id).toEqual(22);
        expect(manager.email).toEqual("steve@steveshouse.com");
        expect(manager.officeNumber).toEqual(112);
      });
    });
    describe('getRole', () => {
        it('should return the role of the employee as "Manager"', () => {
            const manager = new Manager("Steve", 22, "steve@steveshouse.com", 112);
    
            expect(manager.getRole()).toEqual("Manager");
          });
        });
    describe('getName', () => {
         it('should return the name of the employee', () => {
            const manager = new Manager("Steve", 22, "steve@steveshouse.com", 112);
        
            expect(manager.getName()).toEqual("Steve");
            });
        });
    describe('getId', () => {
        it('should return the ID of the employee', () => {
            const manager = new Manager("Steve", 22, "steve@steveshouse.com", 112);
            
            expect(manager.getId()).toEqual(22);
            });
        });
    describe('getEmail', () => {
            it('should return the email of the employee', () => {
                const manager = new Manager("Steve", 22, "steve@steveshouse.com", 112);
                
                expect(manager.getEmail()).toEqual("steve@steveshouse.com");
                });
            });
            describe('getOfficeNumber', () => {
                it('should return the office number of the manager', () => {
                    const manager = new Manager("Steve", 22, "steve@steveshouse.com", 112);
                    
                    expect(manager.getOfficeNumber()).toEqual(112);
                    });
                });
    });
  