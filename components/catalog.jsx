import {useState} from "react";
import {Button, Card, CardBody, CardFooter, Divider, Image, Slider} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import NextLink from "next/link";

export default function Catalog({list}) {
    const [selectedKeys, setSelectedKeys] = useState(new Set());
    const [sneakers, setSneakers] = useState(list)

    const [minValue, setMinValue] = useState(Math.min(...list.map(e => e.price)))
    const [maxValue, setMaxValue] = useState(Math.max(...list.map(e => e.price)))

    const [priceLimit, setPriceLimit] = useState([minValue, maxValue])

    return (
        <section className='flex gap-1 mx-1 w-full h-full'>
            <div className='flex flex-col flex-start w-3/12 pe-5'>
                <Divider className="mb-4"/>
                <div className="flex flex-col mb-10 w-full">
                    <p className="mb-3">Размер</p>
                    <div className='flex flex-wrap gap-2'>
                        {[...Array(21).keys()].map(e =>
                            (<Button
                                color={selectedKeys.has(e + 30) ? 'primary' : 'default'}
                                key={e + 30}
                                style={{width: 88, height: 40}}
                                onClick={function () {
                                    selectedKeys.has(e + 30)
                                        ? setSelectedKeys(new Set([...selectedKeys].filter(key => key != e + 30)))
                                        : setSelectedKeys(new Set([...selectedKeys, (e + 30)]))
                                }}
                            >{e + 30}
                            </Button>))}
                    </div>
                </div>
                <Divider className="mb-4"/>
                <Slider
                    value={priceLimit}
                    label="Цена"
                    minValue={minValue}
                    maxValue={maxValue}
                    defaultValue={priceLimit}
                    formatOptions={{style: "currency", currency: "RUB"}}
                    onChange={(e) => setPriceLimit(e)}
                    className="max-w-md mb-10"
                />

                <Button color={"primary"}
                        onClick={() => {
                            let newSneakers = [...list];
                            if (selectedKeys.size > 0) {
                                newSneakers = sneakers.filter(sneaker =>
                                    [...selectedKeys].every(key => sneaker.sizes.includes(key))
                                )
                            }
                            newSneakers = newSneakers.filter(sneaker =>
                                sneaker.price >= priceLimit[0] && sneaker.price <= priceLimit[1]
                            )
                            setSneakers(newSneakers)
                        }}
                >
                    Применить фильтры
                </Button>
                <Button color={"default"}
                        className='mt-4'
                        onClick={() => {
                            setSneakers([...list])
                            setMinValue(Math.min(...list.map(e => e.price)))
                            setMaxValue(Math.max(...list.map(e => e.price)))
                            setPriceLimit([minValue, maxValue])
                            setSelectedKeys(new Set())
                        }}
                >
                    Сбросить фильтры
                </Button>
            </div>
            <div className='w-9/12 h-full'>
                {sneakers.length > 0
                    ? <div className=" grid grid-cols-2 sm:grid-cols-3 gap-10">
                        {sneakers.map((item, index) => (
                            <Card as={NextLink} shadow="sm" key={index} isPressable
                                  href={`/sneakers/${index}`}
                                  style={{width: 278, height: 360}}>
                                <CardBody className="overflow-visible p-0">
                                    <Image
                                        shadow="sm"
                                        radius="lg"
                                        width="100%"
                                        height="100%"
                                        alt={item.title}
                                        className="object-cover h-[300px]"
                                        src={item.img}
                                    />
                                </CardBody>
                                <CardFooter className="text-small justify-between">
                                    <b>{item.title}</b>
                                    <p className="text-default-500">{item.price}₽</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    : <div className='flex items-center justify-center w-full h-full'>
                        <h1 className='text-5xl text-center px-10 pb-24'>Кроссовки с такими фильтрами отсутствуют,
                            сбросьте или измените фильтры</h1>
                    </div>
                }
            </div>

        </section>
    );
}