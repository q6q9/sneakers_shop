import {title} from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import NextLink from "next/link";
import {Link} from "@nextui-org/link";
import {useRouter} from "next/router";
import {Button, ButtonGroup, Card, CardBody, CardFooter, Image, Slider} from "@nextui-org/react";
import {useState} from "react";
import Catalog from "../../components/catalog";
import {sneakers} from "../../services/sneakers_repository";
import Carousel from "../../components/carousel";
import useEmblaCarousel from "embla-carousel-react";
import {useEffect} from "react";
import {useBasketStore} from "../state/basket_store";

export const getServerSideProps = ((context) => {
    console.log(sneakers)
    const id = 6
    return {props: {sneaker: {...sneakers[id], id: id}}}
})

export default function OneSneakerPage({sneaker}) {
    const [selectedSize, setSelectedSize] = useState(sneaker.sizes[0])

    const basket = useBasketStore((state) => state.basket)
    const addItem = useBasketStore((state) => state.addItem)
    const deleteItem = useBasketStore((state) => state.deleteItem)
    const countItems = (size) => {
        console.log(basket)
        if (basket && basket[sneaker.id] && basket[sneaker.id][size]) {
            return basket[sneaker.id][size];
        }

        return 0;
    }

    return (
        <DefaultLayout>
            <section className='flex   justify-between  h-full mb-10'>
                <div className='w-6/12'>
                    {sneaker && <Carousel slides={sneaker.highImages}/>}

                    <p className='pt-10 text-small'>Изображения и цвет представленного товара могут незначительно
                        отличаться от оригинала продукции, в зависимости от разрешения и настроек вашего монитора, а
                        также условий освещения при съемке.

                    </p>
                </div>
                <div className='w-6/12 ps-12 h-full'>
                    <h1 className={title()}>
                        {
                            sneaker.title
                        }
                    </h1>
                    <div className='flex flex-wrap gap-2 mt-10 mb-5'>
                        {sneaker.sizes.map(e =>
                            (<Button
                                color={selectedSize == e ? 'primary' : 'default'}
                                key={e}
                                style={{width: 88, height: 40}}
                                onClick={function () {
                                    console.log(selectedSize)
                                    setSelectedSize(e)
                                }}
                            >{e}
                            </Button>))}
                    </div>
                    <div className='flex jsutify-center items-center my-10'>

                        <h2 className='text-3xl '>{sneaker.price} ₽</h2>

                        {countItems(selectedSize)
                            ? (<>
                                <ButtonGroup className='ms-10' style={{maxWidth: 210, minWidth: 210}} color={"secondary"} size='lg'>
                                    <Button
                                        style={{minWidth: 20}}
                                        onClick={() => deleteItem(sneaker.id, selectedSize)}
                                    >-</Button>
                                    <Button>{countItems(selectedSize)}</Button>
                                    <Button
                                        style={{minWidth: 20}}
                                        onClick={() => addItem(sneaker.id, selectedSize)}
                                    >+</Button>
                                </ButtonGroup>
                            </>)
                            : (<>
                                <Button className='ms-10' size='lg' color='secondary'
                                        style={{minWidth: 210}}
                                        onClick={() => {
                                            console.log(basket)
                                            addItem(sneaker.id, selectedSize)
                                            console.log(basket)
                                        }}
                                >Добавить в корзину</Button>
                            </>)}

                    </div>
                    <div className="description" dangerouslySetInnerHTML={{__html: sneaker.description}}>

                    </div>

                </div>


            </section>
        </DefaultLayout>
    )
}
