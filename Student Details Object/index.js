function StudentDetails(name, roll_no, Class, section,marks_five_subject){
    this.name = name;
    this.roll_no = roll_no;
    this.class = Class;
    this.section = section;
    this.marks_of_5_subjects = marks_five_subject;
    this.printTop3Subjects = function(){

        const subjects = Object.keys(this.marks_of_5_subjects);
        subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
        console.log("Top 3 Subjects:-");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${subjects[i]}`);
        }
    };
    this.printReportCard = function(){
        console.log("Report Card");
        console.log(`Name - ${this.name}`);
        console.log(`Roll no - ${this.roll_no}`);
        console.log(`Class - ${this.class}`);
        console.log(`Section - ${this.section}`);   
        for(let x in this.marks_of_5_subjects){
            console.log(`${x} - ${this.marks_of_5_subjects[x]}`);
        }

    }
}

const student1 = new StudentDetails("Sohit","23","XII", "A",
{
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});


// student1.printTop3Subjects();
student1.printReportCard();
