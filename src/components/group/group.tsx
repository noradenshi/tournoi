import TeamProps from "@/interfaces/TeamProps";
import "./group.css"

export default function Group(name: string, teams: TeamProps[]) {
    return (
        <div id="groups" className="box">
            <h1>Group {name}</h1>
            <table className="group">
                <thead>
                    <tr>
                        <td>Lp</td>
                        <td>Name</td>
                        <td className="points">Points</td>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td className="name">{team.name}</td>
                            <td className="points">{(3 - index) * 3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
