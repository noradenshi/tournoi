import Header from "@/components/header/header";
import Bracket from "@/components/bracket/bracket";
import Footer from "@/components/footer/footer";
import Standings from "@/components/standings/standings";
import TeamProps from "@/interfaces/TeamProps";
import News from "@/components/news/news";

export default function Home() {
    const team_names = [
        "Thunderstrikers", "Iron Titans", "Blazing Falcons", "Shadow Panthers",
        "Silver Sparks", "Crimson Hawks", "Golden Gladiators", "Eclipse Warriors",
        "Storm Chasers", "Phantom Wolves", "Frost Blades", "Night Vortex",
        "Savage Predators", "Electric Pioneers", "Inferno Knights", "Mystic Raiders"
    ];

    const teams: TeamProps[] = team_names.map((name, seed) => ({
        seed, name, wins: 1, loses: 1,
    }));

    return (
        <div>
            <Header />
            <div className="content-wrap">
                <div className="content-2">
                    {Bracket(teams)}
                    <News />
                </div>
                <div className="content-1">
                    {Standings(teams)}
                </div>
            </div>
            <Footer />
        </div>
    );
}
