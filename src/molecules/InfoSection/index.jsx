import React from 'react';
import SilverInfoSection from '../../atoms/SilverInfoSection/';
import PlatinumInfoSection from '../../atoms/PlatinumInfoSection/';
import './styles.css';
import FlavorCard from '../../atoms/FlavorCard';
import img1 from './1.jpg';
import img2 from './2.png';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';

class InfoSection extends React.Component {
    state = {
        // silver: [
        //     { id: 1, eng: "Basil", rus: "Базилик" },
        //     { id: 2, eng: "Bird Cherry", rus: "Черемуха" },
        //     { id: 3, eng: "Bergamot", rus: "Бергамот" },
        //     { id: 4, eng: "Prickle", rus: "Колючка" },
        //     { id: 5, eng: "Wafer", rus: "Вафли" },
        //     { id: 6, eng: " Lychees", rus: "Личи" },
        //     { id: 7, eng: " Feijoa", rus: "Фейхоа" },
        //     { id: 8, eng: " Fresh mango", rus: "Свежий манго" },
        //     { id: 9, eng: " Juicy peach", rus: "Сочный персик" },
        //     { id: 10, eng: " Piephlant", rus: "Ревень" },
        //     { id: 11, eng: " Pomegranate juice", rus: "Гранатовый сок" },
        //     { id: 12, eng: " Italian spices", rus: "Итальянские специи" },
        //     { id: 13, eng: " Ripe raspberries", rus: "Спелая Малина" },
        //     { id: 14, eng: " Quince", rus: "Айва" },
        //     { id: 15, eng: " Marmalade", rus: "Мармелад" },
        //     { id: 16, eng: " Lemon lollipop", rus: "Лимонный леденец" },
        //     { id: 17, eng: " Cream strawberries", rus: "Сливочная Земляника" },
        //     { id: 18, eng: " Cream raspberry", rus: "Сливочная малина" },
        //     { id: 19, eng: " Wild berry", rus: "Лесные ягоды" },
        //     { id: 20, eng: " Green banana", rus: "Зеленый банан" },
        //     { id: 21, eng: " Fresh melon", rus: "Свежая дыня" },
        //     { id: 22, eng: " Black lemonade", rus: "Чёрный лимонад" },
        //     { id: 23, eng: " Mint", rus: "Мята с Ментолом" },
        //     { id: 24, eng: " Watermelon lemonade", rus: "Арбузный лимонад (New)" },
        //     { id: 25, eng: " Isabel", rus: "Изабелла (New)" },
        //     { id: 26, eng: " Sea buckthorn", rus: "Облепиха (New)" },
        //     { id: 27, eng: " Barberry", rus: "Барбарис (New)" },
        //     { id: 28, eng: " Scandinavian berries", rus: "Скандинавские ягоды (New)" },
        //     { id: 29, eng: " Cucumber", rus: "Огурец (New)" },
        //     { id: 30, eng: " Summer cocktail", rus: "Летний коктейль (New)" },
        //     { id: 31, eng: " Prunes with Cinnamon", rus: "Чернослив с Корицей" },
        //     { id: 32, eng: " Strawberry with Mango", rus: "Клубника с Манго (New)" },
        //     { id: 33, eng: " Peach with Honey", rus: "Персик с Мёдом (New)" },
        //     { id: 34, eng: " Blueberry chamomile tea", rus: "Чай Черника с Ромашкой (New)" },
        //     { id: 35, eng: " Raspberry Blend", rus: "Малиновый Бленд (New)" },
        //     { id: 36, eng: " Currant Jam", rus: "Смородиновое варенье (New) " },
        // ],
        // platinum: [
        //     { id: 1, eng: "Wafer", rus: "Вафли " },
        //     { id: 2, eng: "Cream Strawberries ", rus:"Клубника" },
        //     { id: 3, eng: "Lemon lollipop", rus: "Лимонный леденец " },
        //     { id: 4, eng: "Bird Cherry", rus: "Черемуха " },
        //     { id: 5, eng: "Lychees", rus: "Личи " },
        //     { id: 6, eng: "Watermelon lemonade", rus: "Арбузный лимонад (New)" },
        //     { id: 7, eng: "Isabel", rus: "Изабелла (New)" },
        //     { id: 8, eng: "Sea buckthorn", rus: "Облепиха (New)" },
        //     { id: 9, eng: "Barberry", rus: "Барбарис (New)" },
        //     { id: 10, eng: "Scandinavian berries", rus: "Скандинавские ягоды (New)" },
        //     { id: 11, eng: "Cucumber", rus: "Огурец (New)" },
        //     { id: 12, eng: "Summer cocktail", rus: "Летний коктейль (New)" },
        //     { id: 13, eng: "Mint", rus: "Мята" },
        //     { id: 14, eng: "Prunes with Cinnamon", rus: "Чернослив с Корицей" },
        //     { id: 15, eng: "Strawberry with Mango", rus: "Клубника с Манго (New)" },
        //     { id: 16, eng: "Peach with Honey", rus: "Персик с Мёдом (New)" },
        //     { id: 17, eng: "Blueberry chamomile tea", rus: "Чай Черника с Ромашкой (New)" },
        //     { id: 18, eng: "Raspberry Blend", rus: "Малиновый Бленд (New)" },
        //     // { id: 19, eng: "Currant Jam", rus: "Смородиновое варенье (New) " },

        // ]

        silver: [
            { id: 1, eng: "Basil", rus: "Базилик" },
            { id: 2, eng: "Bird Cherry", rus: "Черемуха" },
            { id: 3, eng: "Bergamot", rus: "Бергамот" },
            { id: 4, eng: "Prickle", rus: "Колючка" },
            { id: 5, eng: "Wafer", rus: "Вафли" },
            { id: 6, eng: " Lychees", rus: "Личи" },
            { id: 7, eng: " Feijoa", rus: "Фейхоа" },
            { id: 8, eng: " Fresh mango", rus: "Свежий манго" },
            { id: 9, eng: " Juicy peach", rus: "Сочный персик" },
            { id: 10, eng: " Piephlant", rus: "Ревень" },
            { id: 11, eng: " Pomegranate juice", rus: "Гранатовый сок" },
            { id: 12, eng: " Italian spices", rus: "Итальянские специи" },
            { id: 13, eng: " Ripe raspberries", rus: "Спелая Малина" },
            { id: 14, eng: " Quince", rus: "Айва" },
            { id: 15, eng: " Marmalade", rus: "Мармелад" },
            { id: 16, eng: " Lemon lollipop", rus: "Лимонный леденец" },
            { id: 17, eng: " Cream strawberries", rus: "Сливочная Земляника" },
            { id: 18, eng: " Cream raspberry", rus: "Сливочная малина" },
            { id: 19, eng: " Wild berry", rus: "Лесные ягоды" },
            { id: 20, eng: " Green banana", rus: "Зеленый банан" },
            { id: 21, eng: " Fresh melon", rus: "Свежая дыня" },
            { id: 22, eng: " Black lemonade", rus: "Чёрный лимонад" },
            { id: 23, eng: " Mint", rus: "Мята с Ментолом" },
            { id: 24, eng: " Watermelon lemonade", rus: "Арбузный лимонад" },
            { id: 25, eng: " Isabel", rus: "Изабелла" },
            { id: 26, eng: " Sea buckthorn", rus: "Облепиха" },
            { id: 27, eng: " Barberry", rus: "Барбарис" },
            { id: 28, eng: " Scandinavian berries", rus: "Скандинавские ягоды" },
            { id: 29, eng: " Cucumber", rus: "Огурец" },
            { id: 30, eng: " Summer cocktail", rus: "Летний коктейль" },
            { id: 31, eng: " Prunes with Cinnamon", rus: "Чернослив с Корицей" },
            { id: 32, eng: " Strawberry with Mango", rus: "Клубника с Манго" },
            { id: 33, eng: " Peach with Honey", rus: "Персик с Мёдом" },
            { id: 34, eng: " Blueberry chamomile tea", rus: "Чай Черника с Ромашкой" },
            { id: 35, eng: " Raspberry Blend", rus: "Малиновый Бленд" },
            { id: 36, eng: " Currant Jam", rus: "Смородиновое варенье" },
        ],
        platinum: [
            { id: 1, eng: "Wafer", rus: "Вафли " },
            { id: 2, eng: "Cream Strawberries ", rus: "Клубника" },
            { id: 3, eng: "Lemon lollipop", rus: "Лимонный леденец " },
            { id: 4, eng: "Bird Cherry", rus: "Черемуха " },
            { id: 5, eng: "Lychees", rus: "Личи " },
            { id: 6, eng: "Watermelon lemonade", rus: "Арбузный лимонад" },
            { id: 7, eng: "Isabel", rus: "Изабелла" },
            { id: 8, eng: "Sea buckthorn", rus: "Облепиха)" },
            { id: 9, eng: "Barberry", rus: "Барбарис" },
            { id: 10, eng: "Scandinavian berries", rus: "Скандинавские ягоды" },
            { id: 11, eng: "Cucumber", rus: "Огурец" },
            { id: 12, eng: "Summer cocktail", rus: "Летний коктейль" },
            { id: 13, eng: "Mint", rus: "Мята" },
            { id: 14, eng: "Prunes with Cinnamon", rus: "Чернослив с Корицей" },
            { id: 15, eng: "Strawberry with Mango", rus: "Клубника с Манго" },
            { id: 16, eng: "Peach with Honey", rus: "Персик с Мёдом" },
            { id: 17, eng: "Blueberry chamomile tea", rus: "Чай Черника с Ромашкой" },
            { id: 18, eng: "Raspberry Blend", rus: "Малиновый Бленд" },
            // { id: 19, eng: "Currant Jam", rus: "Смородиновое варенье (New) " },

        ]
    }

    distributeImage = (item) => {
        if (item.id % 5 == 0) return img5;
        if (item.id % 5 == 4) return img4;
        if (item.id % 5 == 3) return img3;
        if (item.id % 5 == 2) return img2;
        if (item.id % 5 == 1) return img1;
    }



    render() {
        return (
            <div className="bgBlack">
                {/* <SilverInfoSection />
                <PlatinumInfoSection /> */}

                <div className="container-fluid row mx-0 px-0 infoSection ">
                    <div className="col-lg-6 col-12 silverBg d-flex align-items-lg-center">
                        <div>
                            <h2 className="display-4 pb-3 tobaccoInfoHeader">
                                Silver
                        </h2>
                            <ul className="text-left tobaccoInfoText">
                                <li className="">Средний по крепости табак, в состав которого входят табачные листы Вирджинии и Берли</li>
                                <li className="">Для истинных ценителей и любителей кальяна</li>
                                <li className="">Насыщенная палитра вкусов. Вкус табака очень хорошо раскрывается, сам табак не боится перегрева</li>
                                <li className="">Акцизный табак</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 p-0 row bg-white mx-0">
                        <div className="col-6">

                            <ul className="list-group list-group-flush">
                                {this.state.silver.slice(0, 18).map((item) => <li className="list-group-item text-left" key={item.id}>{item.rus}</li>)}
                            </ul>
                        </div>
                        <div className="col-6 ">
                            <ul>
                                {this.state.silver.slice(19, 36).map((item) => <li className="list-group-item  text-left flavorList" key={item.id}>{item.rus}</li>)}
                            </ul>
                        </div>
                        {/* <div className="col-md-4 col-12 ">

                            <ul>
                                {this.state.silver.slice(23, 36).map((item) => <li className="text-left" key={item.id}>{item.rus}</li>)}
                            </ul>
                        </div> */}

                    </div>
                    {/* <div className="col-lg-6 col-12 bgBlack p-0">
                        <div className="row mx-0">
                            {this.state.silver.map((item) => <FlavorCard img={this.distributeImage(item)} column="col-3"{...item} />)}
                        </div>
                    </div> */}
                </div>

                {/* Platinum */}

                <div className="container-fluid row mx-0 px-0 infoSection ">
                    <div className="col-lg-6 col-12 bgBlack p-0 order-2 order-lg-1">
                        <div className="row">
                            {this.state.platinum.map((item) => <FlavorCard img={this.distributeImage(item)} column="col-4"{...item} />)}
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 silverBg d-flex align-items-lg-center order-1 order-lg-2">
                        <div>
                            <h2 className="display-4 pb-3 tobaccoInfoHeader">
                                Platinum
                            </h2>
                            <ul className="text-left tobaccoInfoText">
                                <li className="">Легко курится и доставляет эстетическое удовольствие каждому</li>
                                <li className="">Для тех, кто любит спокойное и дымное курение</li>
                                <li className="">Полностью раскрывается вкус и аромат, тем самым подчеркивая истинное качество продукта</li>
                                <li className="">Акцизный табак</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default InfoSection;