import { useHistory } from 'react-router-dom';


function LeaderboardPage({pages}) {
    const history = useHistory();
    return (
        <div>
            <h1>{pages[2].title}</h1>
            <p>{pages[2].text}</p>
            {pages[2].data.scores.map((score) => (<li> {score.teamName}: {score.teamScore}</li>))}
            <br/>
            <br/>
            <br/>
            <button type="button" onClick={() => {history.push("/")}}>New Game</button>
        </div>
    )
}

export default LeaderboardPage;