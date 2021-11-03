import { useHistory } from 'react-router-dom';


function JoinPage({pages}) {
    const history = useHistory();
    return (
        <form>
            <h1>{pages[0].title}</h1>
            <p>{pages[0].text}</p>
            <p>Gamecode: {pages[0].data.gameCode}</p>
            <input type="text" maxLength="4"></input>
            <br/>
            <br/>
            <button type="button" onClick={() => {history.push("/question")}}>Lets Game!</button>
        </form>
    )
}

export default JoinPage;