import './Techs.css';

function Techs() {
    return(
        <section className="techs" id='techs'>
            <h3 className='techs__title'>Технологии</h3>
            <h2 className='techs__technologies'>7 технологий</h2>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__icons'>
                <li className='techs__icon'>
                    <p className='techs__icon_text'>HTML</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon_text'>CSS</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon_text'>JS</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon_text'>React</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon_text'>Git</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon_text'>Express.js</p>
                </li>
                <li className='techs__icon'>
                    <p className='techs__icon_text'>mongoDB</p>
                </li>                
            </ul>         
        </section>
    );
}

export default Techs;