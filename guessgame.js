// program data:
var number = Math.floor(Math.random() * 100);
var guess;
var limit = 10;

// game control loop - iterates for each try
for(i=0;i<10;i++)
{
   guess= prompt("give no ");
    if (guess==number)
       {
           alert("you won");
           break;
       }
}

    if (i==10){
        alert("sorry you lose")
      document.write("you have reach out of limit");
    }
