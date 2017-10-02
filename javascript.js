var name = "LaPearl Hartwell";
var career = "Banking/Finance Services";
var aboutMe = "I wear glasses";
//var interests = ["hiking", "reading", " & cooking"];

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
    var regions = new displayPosition ("Regions", "loans operations specialist", "booking loans and processing checks");
  
    var wellsfargo = new displayPosition ("Wells Fargo", "loan documents specialist 3", "processing home refinance applications");


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
//console.log("I enjoy " + interests);
logInterest("hiking");
logInterest("readng");
logInterest("cooking");

console.log("My Previous Experience");
regions.previousExperience();
wellsfargo.previousExperience();

console.log("My Skills");
clarinet.skill();
braid.skill();
shop.skill();


