//Interview Question
//Create a function that will dynamically generate 9 groups with 3 students in each group.
var students = ['Albert', 'Amber', 'Bryan', 'Craig', 'Dave', 'Hy', 'Jarred', 'Jules', 'Jover', 
'Jia', 'James', 'Kayla', 'Kelvin', 'Kimmy', 'Keo', 'Kyle', 'Lakshmi', 'Michael', 'Nick', 
'Pushpinder', 'Rudy', 'Scott', 'Simin', 'Theresa', 'Tassa', 'Trae', 'Ethan', 'Kevin', 'Chi', 'Jared'];

//variables
//var groupMembers = [];
//var groupSize = 3;

//groupStudents function 
//function groupStudents() 
//loop thru the students array
//for (var i = 0; i < students.length; i++);
//use math.random function to randomly assign 3 students per team to group members variable
//generate an array of an array

//solution
console.log(students.length)

var groups = [];
function formGroups(arr){
    if(groups.length < 10){
        var group = [];
        for (let i = 0; i <3; i++){
            var ranNum = Math.floor(Math.random() * arr.length);
            group.push(arr[ranNum])
            arr.splice(ranNum, 1)
        }
        groups.push(group.join(', '));
        formGroups(arr);
    }else{
        console.log('All groups created')
        console.log(groups)
    }
}



