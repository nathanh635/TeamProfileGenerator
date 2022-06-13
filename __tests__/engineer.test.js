const Engineer = require('../lib/engineer.js');

describe('Engineer', () => {
    describe('Initialization', () => {
    it('should create an object with employee AND engineer properties', () => {
        const engineer = new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");

        //asserting that should create object if these values are passed in
        expect(engineer.name).toEqual("Steve");
        expect(engineer.id).toEqual(22);
        expect(engineer.email).toEqual("steve@steveshouse.com");
        expect(engineer.github).toEqual("github.com/steve")
      });
    });
    describe('getRole', () => {
        it('should return the role of the engineer as "engineer"', () => {
            const engineer = new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");
    
            //asserting that should create object if these values are passed in
            expect(engineer.getRole()).toEqual("Engineer");
          });
        });
    describe('getName', () => {
         it('should return the name of the employee', () => {
            const engineer = new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");
        
            //asserting that should create object if these values are passed in
            expect(engineer.getName()).toEqual("Steve");
            });
        });
    describe('getId', () => {
        it('should return the ID of the employee', () => {
             const engineer = new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");
            
            //asserting that should create object if these values are passed in
            expect(engineer.getId()).toEqual(22);
            });
        });
    describe('getEmail', () => {
            it('should return the email of the employee', () => {
                const engineer = new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");
                
                //asserting that should create object if these values are passed in
                expect(engineer.getEmail()).toEqual("steve@steveshouse.com");
                });
            });

            describe('getGithub', () => {
                it('should return the github link of the employee', () => {
                    const engineer= new Engineer("Steve", 22, "steve@steveshouse.com", "github.com/steve");
                    
                    //asserting that should create object if these values are passed in
                    expect(engineer.getGithub()).toEqual("github.com/steve");
                    });
                });

    });
  