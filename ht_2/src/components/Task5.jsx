import Card from "./Card.jsx";

const CARDS = [{
    id: 1,
    domain: "vuejs.org",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    breadcrumbs: "https://vuejs.org/ > docs",
    url: "https://vuejs.org/",
    title: "Vue.js — The Progressive JavaScript Framework",
    description: "Vue (вимовляється як (англ.) /vjuː/, (укр) /в'ю/) — це фреймворк, який працює на JavaScript, створений для розробки користувацьких інтерфейсів. Він працює на базі звичайного HTML, CSS та JavaScript, з можливостями декларативно програмувати користувацькі інтерфейси будь-якої складності на основі компонентів."
}, {
    id: 2,
    domain: "react.dev",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
    breadcrumbs: "https://react.dev/ > learn",
    url: "https://react.dev/",
    title: "React — The library for web and native user interfaces",
    description: "React — це відкритий JavaScript-фреймворк, а точніше, бібліотекою JavaScript, яка використовується для розробки інтерфейсів користувача. Він був створений компанією Facebook і швидко набув популярності серед розробників з усього світу. Реакт дозволяє ефективно створювати застосунки з високою продуктивністю і масштабованістю. Одним з ключових концепцій у React JS є компоненти. Вони представляють собою незалежні блоки коду, які відповідають за рендеринг певної частини користувацького інтерфейсу."
}, {
    id: 3,
    domain: "angular.dev",
    thumb: "https://pngate.com/wp-content/uploads/2025/05/angular-framework-logo-red-white-shield-icon-modern-design-1.png",
    breadcrumbs: "https://angular.io/ > docs",
    url: "https://angular.io/",
    title: "Angular — The web development framework for building the future",
    description: "Angular (зазвичай так називають фреймворк Angular 2 або Angular 2+, тобто вищі версії) — написаний на TypeScript front-end фреймворк з відкритим кодом, який розробляється під керівництвом Angular Team у компанії Google, а також спільнотою приватних розробників та корпорацій. Angular — це AngularJS, який був переосмислений та перероблений тією ж командою розробників."
}]

export default function Task5() {
    return (
        <section className='task5'>
            <h1>Task5</h1>
            {
                CARDS.map((card, index) => (
                    <Card key={card.id} {...card} className={index % 2 ? 'gray' : 'blue'}/>
                ))
            }
        </section>
    )
}
