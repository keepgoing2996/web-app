import './ContactUs.css';
import Accordion from './Accordion';
// import contacts from './contacts';

const contacts = [
    {
        title: "Phone Number",
        content: "575-571-1234",
    },
    {
        title: "Email Address",
        content: "wang.qianyun@northeastern.edu",
    },
    {
        title: "Address",
        content: "325 Alviso Ter, Sunnyvale, CA94085",
    },
]

function ContactUs() {
    const list = contacts.map(item => {
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

export default ContactUs;