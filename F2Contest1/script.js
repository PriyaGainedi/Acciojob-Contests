/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(function(student){
      if(student.marks>50){
        console.log(student);
      }
    })
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(student){
      if(student.marks>50){
        console.log(student);
      }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    var newstudent = {id:4,name:"susan",age:"20",marks:45};
    arr.push(newstudent);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    for(var i=0; i<arr.length;i++){
      if(arr[i].marks<50){
        arr.splice(i,1);
      }
    }
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    var result = [];
    var arr1 = [
      { id: 4, name: "nick", age: "21", marks: 90 },
      { id: 5, name: "joseph", age: "23", marks: 85 },
      { id: 6, name: "aren", age: "22", marks: 55 },
    ];
    arr1.forEach(function(student){
      result.push(student);
    })
    arr.forEach(function(student){
      result.push(student);
    })
    console.log(result);
  }
  