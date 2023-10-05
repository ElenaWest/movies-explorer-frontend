import './AboutProject.css';

function AboutProject() {
    return(
        <section className="aboutproject" id='aboutproject'>
            <h2 className='aboutproject__title'>О проекте</h2>
            <div className='aboutproject__about'>
                <p className='aboutproject__about-title'>Дипломный проект включал 5 этапов</p>
                <p className='aboutproject__about-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='aboutproject__about-title'>На выполнение диплома ушло 5 недель</p>                
                <p className='aboutproject__about-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='aboutproject__table'>
                <p className='aboutproject__table-one-week'>1 неделя</p>
                <p className='aboutproject__table-weeks'>4 недели</p>
                <p className='aboutproject__table-text'>Back-end</p>
                <p className='aboutproject__table-text'>Front-end</p>
            </div>            
        </section>
    );
}

export default AboutProject;