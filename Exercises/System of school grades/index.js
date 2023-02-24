// system of score academy

const getScore = (score) => {
    if(score >= 90 && score <= 100) {
        score = "A"
    } else if (score >= 80 && score <= 89)  {
        score = "B"
    } else if(score >= 70 && score <= 79){
        score = "C"
    } else if(score >= 60 && score <= 69){
        score= "D"
    }else if(score < 60){
        score = "E"
    } else {
        score = "Score invalid"
    }

    console.log(score)
}
 
getScore(101)