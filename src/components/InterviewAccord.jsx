import Question from "./Question"

const InterviewAccord = ({questions}) => {
  return (
    <div>
        {questions.map((question) => 
       <Question question={question} key={question.id}/>
        )}
    </div>
  )
}

export default InterviewAccord