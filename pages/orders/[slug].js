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
    const id = useRouter().query.slug

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
                <h1 className='text-4xl mb-10'>Заказ №{id}. <br/><br/>Статус заказа - <span className='font-bold'>в пути</span></h1>
            </div>
        </DefaultLayout>
    )
}