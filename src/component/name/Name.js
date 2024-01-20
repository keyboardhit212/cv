import './Name.css';

export default function Name({name}) {
    return (
        <>
            <section className='name'>
                <p>{name}</p>
            </section>
        </>
    );
}