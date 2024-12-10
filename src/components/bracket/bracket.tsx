import TeamProps from "@/interfaces/TeamProps";
import "./bracket.css"

interface MatchupProps {
    team1: TeamProps;
    team2: TeamProps;
    score1: number;
    score2: number;
}

function Matchup({ team1, team2, score1, score2 }: MatchupProps) {
    return (
        <table className="matchup">
            <tbody>
                <tr className="team1">
                    <td className="name">{team1.name}</td>
                    <td className="score">{score1}</td>
                </tr>
                <tr className="team2">
                    <td className="name">{team2.name}</td>
                    <td className="score">{score2}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default function Bracket(teams: TeamProps[]) {
    return (
        <div id="bracket" className="box">
            <h1>Bracket</h1>
            <div className="bracket">
                <div className="stage">
                    <label>
                        Quarter-Finals
                        <Matchup team1={teams[0]} team2={teams[1]} score1={1} score2={0} />
                        <Matchup team1={teams[4]} team2={teams[5]} score1={1} score2={0} />
                        <Matchup team1={teams[8]} team2={teams[9]} score1={1} score2={0} />
                        <Matchup team1={teams[12]} team2={teams[13]} score1={1} score2={0} />
                    </label>
                </div>

                <div className="stage">
                    <label>
                        Semi-Finals
                        <Matchup team1={teams[0]} team2={teams[4]} score1={2} score2={1} />
                        <Matchup team1={teams[8]} team2={teams[12]} score1={2} score2={1} />
                    </label>
                </div>

                <div className="stage">
                    <label>
                        Final
                        <Matchup team1={teams[0]} team2={teams[8]} score1={2} score2={0} />
                    </label>
                </div>
            </div>
        </div>
    );
}
