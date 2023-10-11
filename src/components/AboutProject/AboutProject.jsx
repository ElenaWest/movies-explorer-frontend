import './AboutProject.css';

function AboutProject() {
    return(
        <section className="about-project" id='aboutproject'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__about'>
                <p className='about-project__about-title'>Дипломный проект включал 5 этапов</p>
                <p className='about-project__about-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='about-project__about-title'>На выполнение диплома ушло 5 недель</p>                
                <p className='about-project__about-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='about-project__table'>
                <p className='about-project__table-title about-project__table-title_green'>1 неделя</p>
                <p className='about-project__table-title about-project__table-title_grey'>4 недели</p>
                <p className='about-project__table-text'>Back-end</p>
                <p className='about-project__table-text'>Front-end</p>
            </div>            
        </section>
    );
}

export default AboutProject;