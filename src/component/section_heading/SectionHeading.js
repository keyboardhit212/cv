import './SectionHeading.css';

export default function SectionHeading({id, title, link}) {
    return (
        <section id={id} className='section-heading'><a href={link}>{title}</a></section>  
    );
}