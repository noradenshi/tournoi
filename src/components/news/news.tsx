import "./news.css"

interface ArticleProps {
    title: string;
    message: string;
    date: string;
}

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
                <Article title="Grande Finale"
                    date="22.11.2024"
                    message="is just around the corner!"
                />
                <Article title="First stage over!"
                    date="15.11.2024"
                    message="Let's summarize what we've seen so far..."
                />
                <Article title="And so it begins..."
                    date="1.11.2024"
                    message="The long-awaited leTournoi just started!"
                />
            </div>
        </div>
    );
}
