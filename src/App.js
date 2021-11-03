import './App.css';
import QuestionPage from './pages/QuestionPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import JoinPage from './pages/JoinPage';
import LeaderboardPage from './pages/LeaderboardPgae';

const {pages} = {
  "pages": [
		{
			"pageId": "JOIN",
			"title": "Join the game!",
			"text": "Enter the game code below to join:",
			"data": {
				"gameCode": "A4B5"
			}
		},
		{
			"pageId": "QUESTION",
			"title": "Question 1",
			"text": "What is the square root of 4?",
			"data": {
				"answers": ["2", "3", "1/2", "16"]
			}
		},
		{
			"pageId": "SCORECARD",
			"title": "Scorecard",
			"text": "Here's how each team is doing:",
			"data": {
				"scores": [
					{
						"teamName": "team 1",
						"teamScore": 200
					},
					{
						"teamName": "team 2",
						"teamScore": 500
					},
					{
						"teamName": "team 3",
						"teamScore": 300
					},
					{
						"teamName": "team 4",
						"teamScore": 400
					}
				]
			}
		}
	]
}

function App() {
  return (
    <Router>
		<Route exact path="/" render={() => <JoinPage pages={pages} />} />
		<Route path="/question" render={() => <QuestionPage pages={pages} />} />
		<Route path="/leaderboard" render={() => <LeaderboardPage pages={pages} />} />
	</Router>
  );
}

export default App;
