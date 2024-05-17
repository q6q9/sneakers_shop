import DefaultLayout from "../../layouts/default";
import Catalog from "../../components/catalog";
import {sneakers} from "../../services/sneakers_repository";
import {useBasketStore, useTotalSumBasket} from "../state/basket_store";
import React, {useEffect, useState} from "react";
import {title, subtitle} from "@/components/primitives";
import {
    Button,
    ButtonGroup,
    Image,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";
import NextLink from "next/link";


export default function BasketPage() {

    const [basket, deleteItem, addItem, clear] = useBasketStore(state => [
        state.basket, state.deleteItem, state.addItem, state.clear
    ])

    const [models, setModels] = useState(sneakers)

    const totalSum = () => {
        let totalSum = 0;
        for (const id in basket) {
            for (const size in basket[id]) {
                const sneaker = models[id];
                if (!sneaker) {
                    return;
                }
                const quantity = basket[id][size];
                totalSum += sneaker.price * quantity;
            }
        }
        return totalSum;
    }

    const countItems = (id, size) => {
        if (basket[id] && basket[id][size]) {
            return basket[id][size];
        }

        return 0;
    }

    return (
        <DefaultLayout>
            <div className='inline-block text-center justify-center w-full'>
                <div className='flex justify-between items-center w-full mb-10'>
                    <h1 className={title()}>Корзина</h1>
                    <Button size={"lg"}
                            onClick={clear}
                    >Очистить корзину</Button>
                </div>
                <div className='gap-10'>
                    {Object.entries(basket).map(([id, sizes]) => {
                        return Object.entries(sizes).map(([size, quantity]) => {
                            const sneaker = models[id];
                            if (!sneaker) {
                                return;
                            }
                            return (
                                <NextLink href={`/sneakers/${id}`}>
                                    <div className='flex justify-between items-center mb-10' key={`${id}-${size}`}>
                                        <Image src={sneaker.img} width='150' height='150'/>
                                        <p className='text-lg'>{sneaker.title}</p>
                                        <p>Размер: {size}</p>
                                        <p>Цена: <span className='font-bold'>{sneaker.price} ₽</span></p>
                                        <p>Количество: {quantity}</p>
                                        <p>Сумма: <span className='font-bold'>{quantity * sneaker.price} ₽</span></p>
                                        <ButtonGroup className='ms-10' color={"secondary"} size='lg'>
                                            <Button
                                                style={{minWidth: 20}}
                                                onClick={() => deleteItem(id, size)}
                                            >-</Button>
                                            <Button style={{
                                                minWidth: 20,
                                                width: 20,
                                                padding: 0
                                            }}>{countItems(id, size)}</Button>
                                            <Button
                                                style={{minWidth: 20}}
                                                onClick={() => addItem(id, size)}
                                            >+</Button>
                                        </ButtonGroup>
                                    </div>
                                </NextLink>
                            );
                        });
                    })}
                </div>
                <div className='flex justify-center gap-10 items-center w-full my-24'>

                    <Button as={NextLink} href={`/payments/${totalSum()}`} color='danger' style={{minWidth:300, minHeight:70, fontSize:24}} size={"lg"}>
                        Перейти к оплате
                    </Button>
                    <p className='text-4xl'>Итого - <span className='font-bold'>{totalSum()}</span> ₽</p>
                </div>
            </div>
        </DefaultLayout>
    )
}