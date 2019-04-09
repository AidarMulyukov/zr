import React from 'react';
import { PriceListImage } from "./priceList.jpg";
import './styles.css';
const PriceList = () => (
    <div className="priceListBg p-3 p-lg-5">
        <div className="table-responsive-md semiTransparent">
            <h5 className="text-white">Линейка Silver 100гр.</h5>
            <table class="table">
                <thead class="thead-light m-5">
                    <tr>
                        <th scope="col">До 20 пачек</th>
                        <th scope="col">от 20 до 100 пачек</th>
                        <th scope="col">от 100 до 300 пачек</th>
                        <th scope="col">от 300 и выше</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-light">
                        <td>700₽</td>
                        <td>550₽</td>
                        <td>500₽</td>
                        <td>450₽</td>
                    </tr>
                </tbody>
            </table>

            <h5 className="text-white">Линейка Silver 60гр.</h5>
            <table class="table">
                <thead class="thead-light m-5">
                    <tr>
                        <th scope="col">До 20 пачек</th>
                        <th scope="col">от 20 до 100 пачек</th>
                        <th scope="col">от 100 до 300 пачек</th>
                        <th scope="col">от 300 и выше</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-light">
                        <td>450₽</td>
                        <td>400₽</td>
                        <td>375₽</td>
                        <td>350₽</td>
                    </tr>
                </tbody>
            </table>

            <h5 className="text-white">Линейка Platinum 100гр.</h5>
            <table class="table">
                <thead class="thead-light m-5">
                    <tr>
                        <th scope="col">До 20 пачек</th>
                        <th scope="col">от 20 до 100 пачек</th>
                        <th scope="col">от 100 до 300 пачек</th>
                        <th scope="col">от 300 и выше</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-light">
                        <td>600₽</td>
                        <td>450₽</td>
                        <td>400₽</td>
                        <td>350₽</td>
                    </tr>
                </tbody>
            </table>

            <h5 className="text-white">Линейка Platinum 60гр.</h5>
            <table class="table">
                <thead class="thead-light m-5">
                    <tr>
                        <th scope="col">До 20 пачек</th>
                        <th scope="col">от 20 до 100 пачек</th>
                        <th scope="col">от 100 до 300 пачек</th>
                        <th scope="col">от 300 и выше</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-light">
                        <td>350₽</td>
                        <td>300₽</td>
                        <td>275₽</td>
                        <td>250₽</td>
                    </tr>
                </tbody>
            </table>


        </div>
    </div>
)

export default PriceList;