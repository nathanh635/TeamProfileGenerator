const Intern = require('../lib/intern.js');


describe('Employee', () => {
    describe('Initialization', () => {
    it('should create an intern with the specified properties', () => {
        const intern = new Intern("Steve", 22, "steve@steveshouse.com", "University of Waterloo");

        //asserting that should create object if these values are passed in
        expect(intern.name).toEqual("Steve");
        expect(intern.id).toEqual(22);
        expect(intern.email).toEqual("steve@steveshouse.com");
        expect(intern.school).toEqual("University of Waterloo")
      });
    });
    describe('getRole', () => {
        it('should return the role of the intern as "Intern"', () => {
            const intern = new Intern("Steve", 22, "steve@steveshouse.com", "University of Waterloo");
    
            //asserting that should create object if these values are passed in
            expect(intern.getRole()).toEqual("Intern");
          });
        });
    describe('getName', () => {
         it('should return the name of the employee', () => {
            const intern = new Intern("Steve", 22, "steve@steveshouse.com", "University of Waterloo");
        
            //asserting that should create object if these values are passed in
            expect(intern.getName()).toEqual("Steve");
            });
        });
    describe('getId', () => {
        it('should return the ID of the intern', () => {
            const intern = new Intern("Steve", 22, "steve@steveshouse.com", "University of Waterloo");
            
            //asserting that should create object if these values are passed in
            expect(intern.getId()).toEqual(22);
            });
        });
    describe('getEmail', () => {
            it('should return the email of the employee', () => {
                const intern = new Intern("Steve", 22, "steve@steveshouse.com", "University of Waterloo");
                
                //asserting that should create object if these values are passed in
                expect(intern.getEmail()).toEqual("steve@steveshouse.com");
                });
            });
            describe('getSchool', () => {
                it('should return the school of the intern', () => {
                    const intern = new Intern("Steve", 22, "steve@steveshouse.com", "University of Waterloo");
                    
                    //asserting that should create object if these values are passed in
                    expect(intern.getSchool()).toEqual("University of Waterloo");
                    });
                });
    });
  