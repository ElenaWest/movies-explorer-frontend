import './Techs.css';

function Techs() {
    return(
        <section className="techs" id='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <h3 className='techs__technologies'>7 технологий</h3>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__icons'>
                <li className='techs__icon'>
                    <p className='techs__icon-text'>HTML</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon-text'>CSS</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon-text'>JS</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon-text'>React</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon-text'>Git</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon-text'>Express.js</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon-text'>mongoDB</p>
                </li>                
            </ul>         
        </section>
    );
}

export default Techs;