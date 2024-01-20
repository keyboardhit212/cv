import './Description.css';

export default function Description({content, width}) {
    return (
        <section className='description' style={{width: width}}>
            <p>{content}</p>
        </section>
    );
}