import ArticleProps from "@/interfaces/ArticleProps";
import "./news.css"
import { news_articles } from "@/data/news";

function Article({ title, message, date }: ArticleProps) {
    return (
        <article>
            <h2 className="title">{title}<span className="date">{date}</span></h2>
            <p className="message">{message}</p>
        </article>
    );
}

export default function News() {
    return (
        <div id="news" className="box">
            <h1>News</h1>
            <div className="news">
                {news_articles.map((v) => <>{Article(v)}</>)}
            </div>
        </div>
    );
}
