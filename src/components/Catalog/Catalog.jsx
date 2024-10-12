import { Card } from '../Card/Card';
import s from './Catalog.module.css';
import  { products } from '../../data/data.js';


export function Catalog() {
    return (
        <div className="container">
            <div className={s.catalog}>
                <h1 className={s.hh}>Каталог товаров</h1>
                <div className={s.catalogs}>
                    {
                        products.map((product) => {
                            return (
                                <Card {...product} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}