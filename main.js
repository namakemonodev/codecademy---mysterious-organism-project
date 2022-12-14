// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  //creates a new object
  function pAequorFactory(specimenNum, dna) {
    return {
      specimenNum,
      dna, 
      
      //changes one random base in the DNA strand of the object
      mutate() {
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase(); 
          while (this.dna[randomIndex] === newBase) {
            newBase = returnRandBase();
          }
        this.dna[randomIndex] = newBase;
        return this.dna;
      },
      
      //compares how similiar two objects' DNA are and prints that info to the console
      compareDNA(otherOrg) {
        let commonBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherOrg.dna[i]) {
            commonBases++;
          }
        }
        let commonPercent = ((commonBases / this.dna.length) * 100)
        let similiarity = commonPercent.toFixed(2);
     console.log(`${this.specimenNum} and ${otherOrg.specimenNum} are ${similiarity}% similiar.`);
      },
  
      //determines if the object is likely to survive. Survival is likely if DNA is at least 60% C or G bases and returns a boolean value
    willLikelySurvive() {
      const cOrG = this.dna.filter(el => el === "C" || el === "G");
      return cOrG.length / this.dna.length >= 0.6;
    },
  }
};

  //make a random instance. Hello, Bob!
  const bob = new pAequorFactory(3263223, mockUpStrand());

  //checks if Bob is likely to survive. 
  console.log(bob.willLikelySurvive());
  
  //the following should create an array, "studyTheseGuys", of 30 objects that are likely to survive based on the criteria in the willLikelySurvive function
  const studyTheseGuys = [];
  let idCounter = 1;
  
  while (studyTheseGuys.length < 30) {
    let newOrg = pAequorFactory(idCounter, mockUpStrand());
    if (newOrg.willLikelySurvive) {
      studyTheseGuys.push(newOrg);
    }
    idCounter++;
  }
  
  //test it out! Did you get 30 objects?
  console.log(studyTheseGuys)
  
