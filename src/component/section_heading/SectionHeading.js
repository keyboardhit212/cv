import './SectionHeading.css';

export default function SectionHeading({id, title}) {
    return (
        <section id={id} className='section-heading'><span>{title}</span></section>  
    );
}