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
                    <td className="seed">{team1.seed}</td>
                    <td className="name">{team1.name}</td>
                    <td className="score">{score1}</td>
                </tr>
                <tr className="team2">
                    <td className="seed">{team2.seed}</td>
                    <td className="name">{team2.name}</td>
                    <td className="score">{score2}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default function Bracket(teams: TeamProps[]) {
    return (
        <div className="box">
            <h1>Bracket</h1>
            <div className="bracket">
                <div className="stage">
                    <Matchup team1={teams[0]} team2={teams[1]} score1={1} score2={0} />
                    <Matchup team1={teams[2]} team2={teams[3]} score1={1} score2={0} />
                </div>

                <div className="stage">
                    <Matchup team1={teams[0]} team2={teams[2]} score1={2} score2={1} />
                </div>
            </div>
        </div>
    );
}
