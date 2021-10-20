class SchoolCatalog {
    constructor () {
      this._list = [];
    }  
    get list () {
      return this._list;
    }
    addSchool (school) {
      this.list.push(school);
    }
    quickFacts (x) {
      console.log(
        `${x.name} educates ${x.numberOfStudents} ${x.level} school students.`
      );
    }
    print () {
      this.list.forEach(this.quickFacts);
    }
  }
  
  class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudenrs(num) {
      if (typeof num === 'number') {
        this.numberOfStudents = num;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
      const random = Math.floor(Math.random()* substituteTeachers.length);
      return substituteTeachers[random];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._level = 'primary';
      this._pickupPolicy = pickupPolicy;
      this._direction = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
    get direction() {
      const random = Math.floor(Math.random()*this._direction.length);
      return console.log(this._direction[random]);
    }
  }
  
  class MiddleSchool extends School {
    constructor(name, numberOfStudents, languages) {
      super(name, 'middle', numberOfStudents);
      this._languages = languages;
    }
    get languages() {
      return this.languages;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams, averageTestScores) {
      super(name, 'high', numberOfStudents)
      this._sportsTeams = sportsTeams;
      this._averageTestScores = averageTestScores;
    }
    get sportsTeams() {
      return console.log(this._sportsTeams);
    }
    get averageTestScores() {
      return this._averageTestScores;
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansburry', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  lorraineHansbury.direction;
  lorraineHansbury.quickFacts();
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 95);
  const anHenday = new HighSchool(
    'Anthony Henday',
    515,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field', 'Hockey']
  );
  const salisbury = new HighSchool(
    'Salisbury',
    315,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field', 'Hockey']
  );
  
  console.log(alSmith);
  alSmith.sportsTeams;
  
  primary = new SchoolCatalog();
  middle = new SchoolCatalog();
  high = new SchoolCatalog();
  
  high.addSchool(alSmith);
  high.addSchool(salisbury);
  high.addSchool(anHenday);
  
  high.print();