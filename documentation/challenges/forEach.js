{
  title: "Feeling each-y"

  instructions: "You're a senior! Congratulations! But that means it's time to start thinking about colleges and filling out applications. Your guidance counseler suggested that
  you keep a log of all the colleges you're applying to and mark down when you complete the application. This was going really well until one day when you filled out fifty applications
  but forgot to mark them off as you went. Now you have to sit there and change 50 logs! 

  But wait! You're a JavaScript wizard! And wizards don't do anything by hand if they can help it! Time to put those programming skills to use!! 

  At first you decide to use a for loop, but what if there was(were?) an easier way?........Enter forEach!

  You've worked with arrays and some of their native functions. Now it's time to use another function. forEach is similiar to the for loop in the sense that it will loop through
  the array. However, at every item in the array, the forEach funtion allows you to do some work based on a function that you define (MAGIC). The callback function get three arguments at every
  item- the item, the index of the item, and the whole array. 

  Use the example in the editor as a template and fill out the forEach function so that you can change the value of 'completed' to true'. We're going to test out the forEach with the first 5 colleges
  you applied to!",

  content: "var collegeApplications = [{school: 'Princeton', applied: false}, \n 
  {school: 'Harvard', applied: false},\n 
  {school: 'CalTech', applied: false},\n 
  {school: 'MIT', applied: false},\n 
  {school: 'Columbia', applied: false} ]\n \n var exampleArray = [1, 4, 8, 10]\n exampleArray.forEach(function(item, index, array){\n  
    item = item * 2 // this will double the value of every item in the array\n}) // exampleArray will now be [2, 8, 16, 20]\n\n\n 
  collegeApplications.forEach(function(college){\n // write your code here!\n})",

  testCode: 3,

  pointvalue: 100,

  hints: [
  "the forEach function is able to work on every item in the array. In this case, the item is an object. How do you access values in an object?", 
  "since you're only doing work on the values of each item in the array, make sure you're not returning anything from inside the callback function"

  ]
}


tests: 

var test = function(userCode){
  var result = {
    pass: true,
    message: "Congratulations! You passed!"
  }
  eval(userCode);
  if(collegeApplications.length !== 5){
    result.pass= false;
    result.message= 'It looks like you altered the length of array. Did you add or remove any values?'
    return result
  }
  collegeApplications.forEach(function(college){
    if(!college.applied){
      result.pass = false;
      result.message = "It looks like you didn't apply to "+ college.school + ". Make sure your forEach is changing the value of applied to the boolean true"
      return result; 
    }
  })
  return result;
}
