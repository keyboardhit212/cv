import './Description.css';

export default function Description({content, width, children}) {
    return (
        <section className='description' style={{width: width}}>
            <p>{content}{children}</p>
        </section>
    );
}