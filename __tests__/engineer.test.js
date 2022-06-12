const Engineer = require('../lib/engineer.js');

describe('Engineer', () => {
    describe('Initialization', () => {
    it('should create an object with employee AND engineer properties', () => {
        const engineer = new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");

        //asserting that should create object if these values are passed in
        expect(engineer).toEqual({ name: "Steve", id: 22, email: "steve@steveshouse.com", github: "github.com/steve"});
      });
    });
    describe('getRole', () => {
        it('should return the role of the employee as "employee"', () => {
            const engineer = new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");
    
            //asserting that should create object if these values are passed in
            expect(engineer).getRole().toEqual("Engineer");
          });
        });
    describe('getName', () => {
         it('should return the name of the employee', () => {
            const engineer = new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");
        
            //asserting that should create object if these values are passed in
            expect(engineer).getName().toEqual("Steve");
            });
        });
    describe('getID', () => {
        it('should return the ID of the employee', () => {
             const engineer = new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");
            
            //asserting that should create object if these values are passed in
            expect(engineer).getID().toEqual(22);
            });
        });
    describe('getEmail', () => {
            it('should return the email of the employee', () => {
                const engineer = new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");
                
                //asserting that should create object if these values are passed in
                expect(engineer).getEmail().toEqual("steve@steveshouse.com");
                });
            });

            describe('getGithub', () => {
                it('should return the github link of the employee', () => {
                    const engineer= new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");
                    
                    //asserting that should create object if these values are passed in
                    expect(engineer).getEmail().toEqual("steve@steveshouse.com");
                    });
                });

    });
  