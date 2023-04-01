function Student(firstName, lastName, indexNumber, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.indexNumber = indexNumber;
    this.grades = grades;

    this.getAverageGrade = function() {
        if (this.grades.length === 0) {
            return 0;
        }

        const sum = this.grades.reduce((acc, curr) => acc + curr);
        return sum / this.grades.length;
    };

    this.printInfo = function() {
        const avgGrade = this.getAverageGrade();
        console.log(`${this.firstName} ${this.lastName} (index: ${this.indexNumber}) - average grade: ${avgGrade}`);
    };
}