import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
    return(
        <section className="about-me" id='aboutme'>
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__table">
                <h3 className="about-me__name">Елена Василенко</h3>
                <p className="about-me__status">Фронтенд-разработчик, 31 год</p>
                <p className="about-me__text">Родилась и живу в г. Раменское. Закончила экономический факультет РТУ МИРЭА(ранее МГУПИ). У меня есть муж и маленький сын. Работаю в исполнительной дирекции СФР, сейчас нахожусь в декрете. Люблю слушать различную музыку, смотреть сериальчики. Играю в Народном театре оперетты. Решила пройти курсы Я.Практикума, потому что хочу координально изменить свою жизнь. Люблю все, что связано с творчеством и компьютерами.</p>
                <a className="about-me__github" href="https://github.com/ElenaWest" target="blank">Github</a>
                <img className="about-me__photo" src={avatar} alt='Аватар'/>
            </div>
        </section>
    );
}

export default AboutMe;