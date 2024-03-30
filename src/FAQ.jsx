import './FAQ.css';
import Accordion from './Accordion';
import questions from './questions';
function FAQ() {
    const list = questions.map(item => {
        return (
            <Accordion key={item.title} title={item.title} content={item.content}/>
        );
    });
    return (
        <ul className="accordion">
            {list}
        </ul>
    );
}

export default FAQ;