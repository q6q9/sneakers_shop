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


    return (
        <DefaultLayout>
            <div className='inline-block text-center justify-center w-full'>
                <h1 className='text-4xl mb-10'>Оплата произведена успешно. Проверьте ваш почтовый ящик с чеком и ссылкой на страницу отслеживания заказа. </h1>

                <Button as={NextLink} href={'/'} color='danger' style={{minWidth: 320, minHeight: 70, fontSize: 24}}>
                    Главная
                </Button>
            </div>
        </DefaultLayout>
    )
}