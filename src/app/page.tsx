import Header from "@/components/header/header";
import Bracket from "@/components/bracket/bracket";
import Footer from "@/components/footer/footer";
import TeamProps from "@/interfaces/TeamProps";
import News from "@/components/news/news";
import Group from "@/components/group/group";
import ScrollTopButton from "@/components/scrollTop/scrollTop";

export default function Home() {
    const team_names = [
        "Thunderstrikers", "Iron Titans", "Blazing Falcons", "Shadow Panthers",
        "Silver Sparks", "Crimson Hawks", "Golden Gladiators", "Eclipse Warriors",
        "Storm Chasers", "Phantom Wolves", "Frost Blades", "Night Vortex",
        "Savage Predators", "Electric Pioneers", "Inferno Knights", "Mystic Raiders"
    ];

    const teams: TeamProps[] = team_names.map((name, seed) => ({
        seed, name, wins: 1, loses: 1, group_pts: 3
    }));


    return (
        <div>
            <Header />
            <nav>
                <ul>
                    <li><a href="#bracket">Bracket</a></li>
                    <li><a href="#groups">Groups</a></li>
                    <li><a href="#news">News</a></li>
                </ul>
            </nav>
            <div className="content-wrap">
                {Bracket(teams)}
                <div className="groups">
                    {Group("A", teams.slice(0, 4))}
                    {Group("B", teams.slice(4, 8))}
                    {Group("C", teams.slice(8, 12))}
                    {Group("D", teams.slice(12, 16))}
                </div>
                <News />
            </div>
            <ScrollTopButton />
            <Footer />
        </div>
    );
}
