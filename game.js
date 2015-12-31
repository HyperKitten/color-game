function hide () {
    $("#submit-guess").hide();
    $("#guess-color").hide();
    $("#play-again").hide();
}

window.onload = function () {
    hide();
};

$(function () {
    function flash(condition) {
        if (condition == false) {
            var ele = document.getElementsByClassName("head");
            ele[0].style.color = "black";
            ele[1].style.color = "black";
            ele[2].style.color = "black";
            return;
        }
        else if (condition == true) {
            window.setInterval(function() {
                    var ele = document.getElementsByClassName("head");
                    var a = Math.floor(Math.random() * 15); 
                    var b = Math.floor(Math.random() * 15);
                    var c = Math.floor(Math.random() * 15);
                    ele[0].style.color = colors[a];
                    ele[1].style.color = colors[b];
                    ele[2].style.color = colors[c];
            }, 500);
        }
    }
    function appendToAnswer(message) {
        $("#answer").append("<p>"+message+"</p>");
    }
    var colors = ["black","blue","fuchsia","gold","ivory","lawngreen","lime","magenta","mediumorchid","navy","rebeccapurple","royalblue","tomato","turquoise","violet"];
    var guesses = 0;
    var randomColor = Math.random() * 15;
    var randomColorInt = Math.floor(randomColor);
    var target = colors[randomColorInt];
    $("#play-game").click(function () {
        $("#submit-guess").show();
        $("#guess-color").show();
        $("#play-game").hide();
        randomColor = Math.random() * 15;
        randomColorInt = Math.floor(randomColor);
        target = colors[randomColorInt];
        console.log(randomColor + randomColorInt + target);
    });
    $("#play-again").click(function () {
        $("#submit-guess").show();
        $("#guess-color").show();
        $("#play-game").hide();
        $("#play-again").hide();
        randomColor = Math.random() * 15;
        randomColorInt = Math.floor(randomColor);
        target = colors[randomColorInt];
        guesses = 0;
        document.body.style.background = "white";
        $("#answer").html("");
        flash(false);
    });
    $("#submit-guess").click(function() {
        $("#answer").html("");
        var guess = $("#guess-color").val();
        console.log(randomColor + randomColorInt + target);
        var possible = colors.indexOf(guess);
        console.log(possible);
        console.log(guess);
        switch (possible) {
            case -1:
                appendToAnswer("Excuse me stupid, but " + guess + " isn't even an option!\n Guess again!");
                console.log("dummy!");
                guesses += 1;
                break;
            default:
                if (guess > target) {
                    appendToAnswer("Almost! " + guess+ " is alpabetically lower than my number! \n Guess again!");
                    console.log("too Low!");
                    guesses += 1;
                }
                else if (guess < target) {    
                    appendToAnswer("Almost! " + guess + " is alphabetically higher than my number! \n Guess again!");
                    console.log("too high!");
                    guesses += 1;
                }
                else if (guess == target) {
                    guesses += 1;
                    appendToAnswer("Good job! You guessed the right color! \n Don't be too happy, it took you " + guesses + " guess(es) to get it.");
                    console.log($("#play-again").is(":visible"));
                    document.body.style.background = target;
                    $("#play-again").show();
                    $("#submit-guess").hide();
                    $("#guess-color").hide();
                    console.log($("#play-again").is(":visible"));
                    flash(true);
                }    
                break;
        }
        console.log(guesses);
        $("#guess-color").val("");
    });
    
});
