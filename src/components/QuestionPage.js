import { useHistory } from 'react-router-dom';


function QuestionPage({pages}) {
    const history = useHistory();
    return (
        <div>
            <h1>{pages[1].title}</h1>
            <p>{pages[1].text}</p>
            {pages[1].data.answers.map((text) => (<button type="button" onClick={() => {history.push("/leaderboard")}}>{text}</button>))}
        </div>
    )
}

export default QuestionPage;