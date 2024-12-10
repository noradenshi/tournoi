import TeamProps from "@/interfaces/TeamProps";
import "./standings.css"

export default function Standings(teams: TeamProps[]) {
    return (
        <div className="box">
            <h1>Standings</h1>
            <table className="standings">
                <thead>
                    <tr>
                        <td>Lp</td>
                        <td>Name</td>
                        <td className="record">Record</td>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr>
                            <td>{team.seed + 1}</td>
                            <td>{team.name}</td>
                            <td className="record">{team.wins}-{team.loses}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
