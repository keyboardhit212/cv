import './Experience.css';


export function Dot() {
    return (
        <span className='dot'>&bull;</span>
    )
}

export function Dash() {
    return (
        <span className='dot'>&mdash;</span>
    )
}

export default function Experience({from, to, title, work, description, children}) {
    return (
        <>
        <section className='experience'>
            <p className='timeline'>{from} <Dash/> {to}</p>
            <section>
                <p className='title'>{title} <Dot/> {work}</p>
                <p className='description'>{description}</p>
                {children}
            </section>
        </section>
        </>
    );
}