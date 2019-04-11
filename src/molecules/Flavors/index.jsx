import React, { Component } from 'react';
import './styles.css';
class Flavors extends Component {
    constructor() {
        super();
        this.state = {
            flavors: [
                { id: 1, eng: "Bird Cherry", rus: "Черёмуха", description: "сладко-кисловатый, слегка вяжущий вкус" },
                { id: 2, eng: "Bergamot", rus: "Бергамот", description: "растение, отдаленно напоминающее лимон или лайм. Отлично расслабит и добавит аромат бергамота вашему миксу" },
                { id: 3, eng: "PRICKLE", rus: "КОЛЮЧКА", description: "ПО ВКУСУ НАПОМИНАЕТ КАКТУС, СОЧЕТАЕТСЯ В РАЗНЫХ МИКСАХ" },
                { id: 4, eng: "WAFER", rus: "ВАФЛИ", description: "НЕЖНЫЙ, СЛАДКИЙ ВКУС ХРУСТЯЩИХ ВАФЕЛЬ, ОДИН ИЗ САМЫХ ТОПОВЫХ ВКУСОВ" },
                { id: 5, eng: "LYCHEES", rus: "ЛИЧИ", description: "КИТАЙСКИЙ ФРУКТ, ИМЕЕТ НЕЗАБЫВАЕМЫЙ ВКУС, КОТОРЫЙ СТОИТ ПОПРОБОВАТЬ" },
                { id: 6, eng: "FEIJOA", rus: "ФЕЙХОА", description: "ОЧЕНЬ НАСЫЩЕННЫЙ ВКУС, МАКСИМАЛЬНО ПРИБЛИЖЕН К НАСТОЯЩЕМУ" },
                { id: 7, eng: "FRESH MANGO", rus: "СВЕЖИЙ МАНГО", description: "НАСЫЩЕННЫЙ, ЯРКИЙ, СЛАДКОВАТЫЙ ВКУС ТРОПИЧЕСКОГО ФРУКТА" },
                { id: 8, eng: "JUICY PEACH", rus: "СОЧНЫЙ ПЕРСИК", description: "ОСВЕЖАЮЩИЙ, ЯРКИЙ, НАСЫЩЕННЫЙ ВКУС, ОТЛИЧНО СОЧЕТАЕТСЯ С GREEN BANANA" },
                { id: 9, eng: "RIPE RASPBERRIES", rus: "СПЕЛАЯ МАЛИНА", description: "ДУШИСТЫЙ, АРОМАТНЫЙ ВКУС СОЧНОЙ СПЕЛОЙ МАЛИНЫ" },
                { id: 11, eng: "MARMALADE", rus: "МАРМЕЛАД", description: "СЛАДКИЙ ФРУКТОВЫЙ ВКУС, ПРИЯТНЫЙ АРОМАТ, НАПОМИНАЕТ КОНФЕТКИ BON PARI" },
                { id: 12, eng: "LEMON LOLLIPOP", rus: "ЛИМОННЫЕ ЛЕДЕНЕЦЫ", description: "ВКУС НАПОМИНАЕТ ЛИМОННЫЕ КОНФЕТКИ, С КИСЛИНКОЙ ЦЕДРЫ" },
                { id: 13, eng: "CREAM STRAWBERRIES", rus: "СЛИВОЧНАЯ ЗЕМЛЯНИКА", description: "ВКУС НЕЖНЫЙ, СЛАДКИЙ, СЛИВОЧНЫЙ, ИДЕАЛЬНЫЙ БАЛАНС ЗЕМЛЯНИКИ И СЛИВОК" },
                { id: 14, eng: "CREAM RASPBERRY", rus: "СЛИВОЧНАЯ МАЛИНА", description: "СЛИВОЧНАЯ И УМЕРЕННО-СЛАДКАЯ, С ЕДВА ЗАМЕТНОЙ КИСЛИНКОЙ И МЯГКИМ ЯГОДНЫМ ПОСЛЕВКУСИЕМ" },
                { id: 14, eng: "WILD BERRY", rus: "ЛЕСНЫЕ ЯГОДЫ", description: "-СВЕЖИЙ ВКУС ЛЕСНЫХ ЯГОД С ЛЕГКОЙ КИСЛИНКОЙ И СЛАДКИМИ НОТКАМИ МАЛИНЫ И ЗЕМЛЯНИКИ" },
                { id: 15, eng: "GREEN BANANA", rus: "ЗЕЛЕНЫЙ БАНАН", description: "ВКУС НЕ ТАКОЙ ПРИТОРНО-СЛАДКИЙ КАК ОБЫЧНЫЙ, С НЕБОЛЬШИМ ОТТЕНКОМ ЗЕЛЕНУШКИ, БОЛЕЕ СВЕЖИЙ АРОМАТ" },
                { id: 16, eng: "FRESH MELON", rus: "СВЕЖАЯ ДЫНЯ", description: "-ПРЕДСТАВЛЯЕТ ИДЕАЛЬНЫЙ БАЛАНС ВКУСА С ЕСТЕСТВЕННЫМ АРОМАТОМ ДЫНИ" },
                { id: 17, eng: "BLACK LEMONADE", rus: "ЧЁРНЫЙ ЛИМОНАД", description: "ВКУС СЛАДКИЙ, НАПОМИНАЕТ COCA-COLA БЕЗ ГАЗОВ, НЕКОТОРЫЕ НАХОДЯТ В ЭТОМ ВКУСЕ НОТКИ ГАЗИРОВКИ БАЙКАЛ" },
                { id: 18, eng: "WATERMELON LEMONADE", rus: "АРБУЗНЫЙ ЛИМОНАД", description: "ЭТО НЕЖНЫЙ, СОЧНЫЙ ВКУС СЛАДКОГО СПЕЛОГО АРБУЗА, ТОТ ВКУС, КОТОРЫЙ ХОЧЕТСЯ КУРИТЬ И КУРИТЬ" },
                { id: 19, eng: "ISABELA", rus: "ВИНОГРАД ИЗАБЕЛЛА", description: "В ЭТОМ ВКУСЕ СОЧЕТАЕТСЯ ТЕРПКИЙ ВИНОГРАДНЫЙ АРОМАТ, КОТОРЫЙ СМЕШИВАЕТСЯ С НОТАМИ ЛУЧШИХ ИТАЛЬЯНСКИХ ВИН" },
                { id: 20, eng: "BARBERRY", rus: "БАРБАРИС", description: "ВКУС НАПОМИНАЕТ ЛЕДЕНЦЫ БАРБАРИСКИ ИЗ ДЕТСТВА. ИМЕЕТ СЛАДКИЙ, НАСЫЩЕННЫЙ АРОМАТ" },
                { id: 21, eng: "PRUNES WITH CINNAMON", rus: "ЧЕРНОСЛИВ С КОРИЦЕЙ", description: "НАСЫЩЕННЫЙ И СОЧНЫЙ ВКУС ЧЕРНОСЛИВА С КОРИЦЕЙ, НЕМНОГО КИСЛОВАТЫЙ, С ОТТЕНКОМ СЛАДОСТИ" },
                { id: 22, eng: "STRAWBERRY WITH MANGO", rus: "КЛУБНИКА С МАНГО", description: "ЛЕГКИЙ, СЛАДКИЙ ВКУС КЛУБНИЧНОГО ВАРЕНЬЯ. ОДИН ИЗ ЛУЧШИХ КЛУБНИЧНЫХ ВКУСОВ СРЕДИ ВСЕХ ПРОИЗВОДИТЕЛЕЙ. ОЧЕНЬ БЫСТРО СТАЛ ЛЮБИМЫМ ВКУСОМ ДЛЯ МНОГИХ ЦЕНИТЕЛЕЙ" },
                { id: 23, eng: "PEACH WITH HONEY", rus: "ПЕРСИК С МЁДОМ", description: "ПРЯНЫЙ, НАТУРАЛЬНЫЙ, ЯРКО-ВЫРАЖЕННЫЙ ПЕРСИК. КИСЛО-СЛАДКИЙ МИКС С ЛЕГКИМИ НОТКАМИ ЦВЕТОЧНОГО МЁДА" },
                { id: 24, eng: "BLUEBERRY CHAMOMILE TEA", rus: "ЧАЙ ЧЕРНИКА С РОМАШКОЙ", description: "ОЧЕНЬ НЕОБЫЧНАЯ ЧЕРНИКА. КРОМЕ ЧЕРНИКИ ЗДЕСЬ ИМЕЮТСЯ ДОПОЛНИТЕЛЬНЫЕ НОТКИ ОСВЕЖАЮЩЕЙ МЯТЫ И РОМАШКИ" },
                { id: 25, eng: "RASPBERRY BLEND", rus: "МАЛИНОВЫЙ БЛЕНД", description: "ЯВЛЯЕТСЯ ОРИГИНАЛЬНЫМ ТВОРЕНИЕМ. ОБЛАДАЕТ ПОТРЯСАЮЩИМ, УНИКАЛЬНЫМ АРОМАТОМ, СМЕШАННЫМ С ПРИЯТНЫМ ВКУСОМ МАЛИНЫ" },
                { id: 26, eng: "CURRANT JAM", rus: "СМОРОДИНОВОЕ ВАРЕНЬЕ", description: "ОБЛАДАЕТ НАСЫЩЕННЫМ,СЛАДКОВАТО-КИСЛЫМ И МЯГКИМ ВКУСОМ ВАРЕНЬЯ" },
                { id: 27, eng: "PASSION FRUIT", rus: "МАРАКУЙЯ", description: "ЭТО СЛАДКИЙ ВКУС ЗРЕЛОГО МАРАКУЙЯ. СЛАДОСТЬ МАРАКУЙИ ХОРОША КАК САМА ПО СЕБЕ, ТАК И В МИКСАХ" },
                { id: 28, eng: "RIPE ORANGE", rus: "СПЕЛЫЙ АПЕЛЬСИН", description: "ЭТО ВКУС СПЕЛОГО АПЕЛЬСИНА, НАСЫЩЕННЫЙ И КИСЛО-СЛАДКИЙ, ОСТАВЛЯЮЩИЙ ПОСЛЕ СЕБЯ ПРИЯТНОЕ, ДЛИТЕЛЬНОЕ ПОСЛЕВКУСИЕ" },
                { id: 29, eng: "GRAPEFRUIT", rus: "ГРЕЙПФРУТ", description: "ЭТО ПРИЯТНЫЙ НАТУРАЛЬНЫЙ ВКУС КИСЛОГО ГРЕЙПФРУТА. ОДИН ИЗ ЛУЧШИХ ЦИТРУСОВЫХ ВКУСОВ В ЦЕЛОМ. ХОРОШ КАК САМ ПО СЕБЕ, ТАК И В МИКСАХ С ДРУГИМИ ЦИТРУСОВЫМИ" },
                { id: 30, eng: "GINGER COOKIES", rus: "ИМБИРНОЕ ПЕЧЕНЬЕ", description: "ВКУС СВЕЖЕИСПЕЧЁННОГО ИМБИРНОГО ПРЯНИКА, ПИКАНТНУЮ НОТКУ ДОБАВЛЯЮТ КОРИЦА И МУСКАТНЫЙ ОРЕХ" },
                { id: 31, eng: "BAIKAL LEMONADE", rus: "ЛИМОНАД БАЙКАЛ", description: "ЯРКИЙ, НАСЫЩЕННЫЙ ТРАВЯНОЙ ВКУС, ПРИСУЩИЙ ОДНОМУ ИЗ ЛЮБИМЫХ И САМЫХ ПОПУЛЯРНЫХ ЛИМОНАДОВ НЕДАЛЁКОГО ПРОШЛОГО. ОДИН ИЗ САМЫХ НЕОБЫЧНЫХ ВКУСОВ" },
                { id: 32, eng: "HLADAGENT", rus: "ХЛАДАГЕНТ", description: "НЕ ИМЕЕТ ЯРКОГО ВКУСА И ЗАПАХА. ОБЕСПЕЧИВАЕТ ДЛИТЕЛЬНЫЙ ОХЛАЖДАЮЩИЙ ЭФФЕКТ. ПОЧУВСТВУЙ ЛЕДЯНУЮ СВЕЖЕТЬ" },
                { id: 33, eng: "GREEN APPLE", rus: "ЗЕЛЕНОЕ ЯБЛОКО", description: "КИСЛИНКА ЗЕЛЁНЫХ, СОЧНЫХ ПЛОДОВ, ХОРОШО ДОПОЛНЯЕТСЯ СЛАДКОВАТЫМ ПОСЛЕВКУСИЕМ. ХОРОШО ИДЁТ В МИКСЕ С ЛИМОННЫМИ ЛЕДЕНЦАМИ" },
            ]
        }
    }

    render() {
        return (
            <div className="container bgBlack">
                <div id="carouselFlavorIndicators" class="carousel slide carouselFix" data-ride="100000000">
                    <ol class="carousel-indicators d-none d-md-flex">
                        <li data-target="#carouselFlavorIndicators" data-slide-to="0" class="active"></li>
                        {this.state.flavors.map((item) => <li key={item.id} data-target="#carouselFlavorIndicators" data-slide-to={item.id}></li>)}
                    </ol>
                    <div class="carousel-inner highCarouselInner cardWrapper">
                        {this.state.flavors.map((item) => <div className={`carousel-item ${item.id === 1?"active":""}`}>

                            <h3 class="w-100 stroke" >{item.eng}</h3>
                            <p className="flavorContent">{`${item.rus} - ${item.description}`}</p>

                        </div>)}
                    </div>
                    <a class="carousel-control-prev" href="#carouselFlavorIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselFlavorIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }

}

export default Flavors;