


{
  "title": 'Pop that dirt off your shoulder'

  "instructions": "You recently became acquaintences (sp) with your classmate Rebecca. She came up to you and asked to borrow your calculator\
  and you never saw that calculator again. Rebecca always seemed nice, so you hung out with her few times, but after a while you noticed that she\
  was into some bad habits. She was disrespectful to her parents, smoked during breaks, and would take your things and never give them back. After talking\
  to your guidance counseler, your parents, and your friends, you decide that you're going to try talking to Rebecca and voicing your concerns. Unfortunately, she\
  doesn't want to change her ways and instead tries to pressure you into following her example. Not cool! Maybe it's time to remove the negativity in your life and \
  end your friendship with Rebecca. It's time to pop out her name from your friends list! \n\nArrays have another native function (also known as a method) called pop. Just as push adds a value to the \
  end of an array, pop will remove the last value. \n\n Complete the function so that you remove Rebecca's name from your list of friends.",

  "content": "var friends = ['Addison', 'Ethan', 'Morgan', 'Garrett', 'Lauren', 'Mark', 'Dave', 'Rebecca']\n\n// enter the method that will remove the last item of the array here!",

  "testCode": "3",

  "pointvalue": "100",

  "hint1": "Are you calling the method on the array? Think back to how you did push!",

  "hint2": "The pop method is very similiar to the push method, except that it takes no arguments. So if you wanted to add a friend, you would do friends.push('Melissa')\
  If you want to remove a friend, you would....."
}


tests: 

var test = function(userCode){
  eval(userCode);
  var result = {
    pass: true,
    message: "Congratulations! You passed!"
  }
  if(friends.pop() ==="Rebecca"){
    result.pass = false;
    result.message = "Oh no! Looks like Rebecca is still your friend. Are you sure you removed her?"
    return result;
  } else if (friends.length < 7){
    result.pass = false;
    result.message = "Oh no! You removed more friends than just Rebecca!"
    return result;
  }
  return result
}
