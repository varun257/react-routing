import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments';
const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Varun', text: 'Learning React is great!'}
];

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
    if(!quote) {
        return <p>No quote found</p>;
    }

    return <section>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        <p>{params.quoteId}</p>
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments />
        </Route>
    </section>;
}

export default QuoteDetail;