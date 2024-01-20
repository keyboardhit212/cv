import './Project.css';

export default function Project({name, link}) {
    return (
        <a href={link} className='project'>{name}</a>
    );
}