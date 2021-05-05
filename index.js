var readlinesync = require("readline-sync");
var userName = readlinesync.question("what is your name. ")
console.log("WELCOME "+userName+" to DO YOU KNOW SAURABH");
score = 0
function play(ques,ans)
{
  var userAns = readlinesync.question(ques);
  if(ans === userAns)
  {
    console.log("you are right!")
    score = score+1;
  }
  else
  {
    console.log("you are Wrong!");
  }
}
var questions = [
  {
    question: "which city i moved for study? ",
    answer: "bangalore"
  },
  {
    question: "what is my age? ",
    answer: "20"
  },
  {
    question: "which is my first favourite movie? ",
    answer: "harry potter"
  }
]
for(var i=0;i<questions.length;i++)

{
  play(questions[i].question,questions[i].answer)
}
console.log("your final score is ",score);


