import { Paper, Button, Typography } from "@material-ui/core";
import { Check, Close } from "@material-ui/icons";
import { createMarkup } from "../helpers";

const AnswersReview = ({ processedAnswers, classes, resetQuiz }) => {
  let myStyle = {
    background: "rgb(42, 168, 241,.5)",
    borderRadius: "30px",
    boxShadow: "0 0 2px 2px rgb(3, 24, 37)"
   }



  const renderAnswers = (answers) => {
    return answers.map(
      ({ question, isCorrect, correctAnswer, wrongAnswer }) => (
        <Paper key={question} className={classes.paper} style={myStyle}>
          <Typography variant="h2" className={classes.question}>
            <span dangerouslySetInnerHTML={createMarkup(question)} />
          </Typography>

          {isCorrect ? (
            <Typography
              variant="h2"
              className={`${classes.answer} ${classes.correctAnswer}`}
            >
              <Check />
              <span
                className={classes.answer}
                dangerouslySetInnerHTML={createMarkup(correctAnswer)}
              />
            </Typography>
          ) : (
            <>
              <Typography
                variant="h3"
                color="secondary"
                className={classes.answer}
              >
                <Close />
                <span
                  className={classes.answer}
                  dangerouslySetInnerHTML={createMarkup(wrongAnswer)}
                />
              </Typography>
              <Typography
                variant="h3"
                className={`${classes.answer} ${classes.correctAnswer}`}
              >
                <Check />
                <span
                  className={classes.answer}
                  dangerouslySetInnerHTML={createMarkup(correctAnswer)}
                />
              </Typography>
            </>
          )}
        </Paper>
      )
    );
  };

  return (
    <>
      <Typography variant="h1" className={classes.mainTitle}>
      Learn from ur mistakes📝:
      </Typography>
      {renderAnswers(processedAnswers)}
      <Button
        className={classes.submitButton}
        onClick={resetQuiz}
        variant="contained"
        color="primary"
      >
        Reset🔄
      </Button>
    </>
  );
};

export default AnswersReview;