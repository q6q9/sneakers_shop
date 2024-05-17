import DefaultLayout from "../../layouts/default";
import Catalog from "../../components/catalog";
import {sneakers} from "../../services/sneakers_repository";
import {useBasketStore, useTotalSumBasket} from "../state/basket_store";
import React, {useEffect, useState} from "react";
import {title, subtitle} from "@/components/primitives";
import {
    Button,
    ButtonGroup,
    Image, Input,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";
import NextLink from "next/link";
import {useRouter} from "next/router";


export default function PaymentPage() {
    const sum = useRouter().query.slug

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


    return (
        <DefaultLayout>
            <div className='inline-block text-center justify-center w-full'>
                <h1 className='text-4xl mb-10'>К оплате - <span className='font-bold'>{totalSum()}</span> ₽</h1>
                <p>Введите электронную почту для чека и ссылки с отслеживанием статуса заказа</p>
                <div className="flex justify-center mt-5">
                    <Input
                        isRequired
                        type="email"
                        label="Email"
                        variant="bordered"
                        className="max-w-xs mb-14"
                    />
                </div>
                <Button color='danger' style={{minWidth: 320, minHeight: 70, fontSize: 24}}>
                    Оплатить
                </Button>
            </div>
        </DefaultLayout>
    )
}