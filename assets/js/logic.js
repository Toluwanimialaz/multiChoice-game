var questions=["commonly used data types do not include","Arrays in javascript can be used to store","the condition if-else statement is enclosed within"]
var sec=30;
var answers={
    one: ["strings","booleans","alerts","numbers"],
    two: ["numbers","strings","other arrays","booleans","all of the above"],
    three:["quotes","curly-brackets","parenthesis","square-brackets"],
    solved:["alerts","all of the above","curly-brackets"]
}
var timeSpan=document.getElementById("time");
var start=document.getElementById("start");
var startScreen=document.getElementById("start-screen");
var quests=document.getElementById("questions");
var titles=document.getElementById("question-title");
var choice=document.getElementById("choices");
var i=0;
var finalScore=document.getElementById("final-score");
var endscreen=document.getElementById("end-screen");
var score=0;

var ki=Object.keys(answers)
var sp=ki[0]
var fg=answers[sp];
console.log(answers[ki[0]].length);

function quiz(){
    unhide(endscreen);
    finalScore.textContent=score;
    var del=document.querySelectorAll("button");
    var del2=document.querySelectorAll("h1");
    for(v=0;v<del.length;v++){
        del[v].remove();
    }
    for(f=0;del2.length;f++){
        del2[f].remove();
    }

}

function unhide(arr){
    arr.setAttribute("style","display:block");
}

function timer(){
    var time= setInterval(function(){
        timeSpan.textContent=sec;
        sec--
        if(sec===0||i>3){
            clearInterval(time);
            quiz()
        }

    },1000)
}

start.addEventListener("click",timer);
document.body.addEventListener("click",function(event){
    var tag=event.target;
    console.log(event)
    if(tag.matches("button")===true){
        startScreen.setAttribute("style","display:none");
        titles.textContent=questions[i];
        quests.setAttribute("style","display:block");
        for(var j=0;j<answers[ki[i]].length;j++){
            var ans=document.createElement("button");
            ans.textContent=answers[ki[i]][j]
            choice.appendChild(ans);
            if(ans.textContent===answers[ki[3]][i]){
                ans.setAttribute("class","solved")
            }
            var bob=document.querySelectorAll(".solved")
            console.log(bob);
        }
        var thatArr=document.querySelectorAll("button");
        if(i>0){
            for(var s=0;s<thatArr.length;s++){
                if(s>4){
                    break
                }
                thatArr[s].remove()
            }
        }
    }
    if(i>0 && tag.matches(".solved")===false){
        sec=sec-5;
    }else if(tag.matches(".solved")===true){
        score+=1
    }
    
    i++;


})


/*still have to do localStorge stuff*/
/* a better way to do this would hve been creating an array of objects, each with the keys; question,answers,solved*/