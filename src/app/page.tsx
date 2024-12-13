import Header from "@/components/header/header";
import Bracket from "@/components/bracket/bracket";
import Footer from "@/components/footer/footer";
import News from "@/components/news/news";
import Group from "@/components/group/group";
import ScrollTopButton from "@/components/scrollTop/scrollTop";
import { teams } from "@/data/teams";

export default function Home() {
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
