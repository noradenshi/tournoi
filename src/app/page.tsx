import Header from "@/components/header/header";
import Bracket from "@/components/bracket/bracket";
import Footer from "@/components/footer/footer";
import Standings from "@/components/standings/standings";
import TeamProps from "@/interfaces/TeamProps";
import News from "@/components/news/news";

export default function Home() {
    const team_names = ["alpha", "beta", "omega", "sigma"];
    const teams: TeamProps[] = team_names.map((name, seed) => ({
        seed, name, wins: 1, loses: 1,
    }));

    return (
        <div>
            <Header />
            <div className="content-wrap">
                <div className="content sidebyside">
                    {Bracket(teams)}
                    {Standings(teams)}
                </div>
                <div className="content">
                    <News />
                </div>
            </div>
            <Footer />
        </div>
    );
}
