var name = "LaPearl";
var career = "Coding and Programming";
var aboutMe = "I enjoy stormy afternoons";


function logInterest(interest) {
    console.log("* " + interest);
}

function displayPosition(company, title, duties) {
    this.company = company;
    this.title = title;
    this.duties = duties;
    this.previousExperience = function() {
        console.log("I worked for " +this.company + " as a " + this.title + "  " + this.duties);
    };
}
    var midBank = new displayPosition ("Mid-size Bank", "loans operations specialist", "booking loans and processing checks");
  
    var largeBank = new displayPosition ("Large Bank", "loan documents specialist 3", "processing home refinance applications");


function displaySkill(talent, cool) {
    this.talent = talent;
    this.cool = cool;
    this.skill = function() {
        if(this.cool === true) {
            console.log("* Check It: "+ this.talent)
        }
        else {
            console.log("* " + this.talent);
        }
    };
} 
var clarinet = new displaySkill("play clarinet", true);
var braid = new displaySkill("braid hair", false);
var shop = new displaySkill("find great deals", false);



console.log("Name " + name.toUpperCase());
console.log("Careere Field: " + career);
console.log(aboutMe);
console.log("My Interests");
logInterest("hiking");
logInterest("readng");
logInterest("cooking");

console.log("My Previous Experience");
midBank.previousExperience();
largeBank.previousExperience();

console.log("My Skills");
clarinet.skill();
braid.skill();
shop.skill();
