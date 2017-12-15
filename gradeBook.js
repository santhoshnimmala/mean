var gradeBook = {
    _grade:[],
    
    addGrade : function (newGrade) {
        
        this._grade.push(newGrade);
        // body...
    },
    
    getCountOfGrades : function () {
        
        return this._grade.length
        // body...
    }
    
}

exports.grade = gradeBook
