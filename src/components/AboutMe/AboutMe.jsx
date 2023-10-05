import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
    return(
        <section className="aboutme" id='aboutme'>
            <h3 className="aboutme__title">Студент</h3>
            <div className="aboutme__table">
                <h2 className="aboutme__name">Елена Василенко</h2>
                <p className="aboutme__status">Фронтенд-разработчик, 31 год</p>
                <p className="aboutme__text">Родилась и живу в г. Раменское. Закончила экономический факультет РТУ МИРЭА(ранее МГУПИ). У меня есть муж и маленький сын. Работаю в исполнительной дирекции СФР, сейчас нахожусь в декрете. Люблю слушать различную музыку, смотреть сериальчики. Играю в Народном театре оперетты. Решила пройти курсы Я.Практикума, потому что хочу координально изменить свою жизнь. Люблю все, что связано с творчеством и компьютерами.</p>
                <a className="aboutme__github" href="https://github.com/ElenaWest" target="blank">Github</a>
                <img className="aboutme__photo" src={avatar} alt='Аватар'/>
            </div>
        </section>
    );
}

export default AboutMe;