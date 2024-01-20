import './Paragraph.css';

export default function Paragraph({children}) {
    return (
        <section className='paragraph'>
            {children}
        </section>
    )
}