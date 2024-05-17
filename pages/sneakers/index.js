import {Button, Card, CardBody, CardFooter, Image, Listbox, ListboxItem, Slider} from "@nextui-org/react";
import {title} from "../../components/primitives";
import DefaultLayout from "../../layouts/default";
import {useMemo, useState} from "react";
import Catalog from "../../components/catalog";
import {sneakers} from "../../services/sneakers_repository";

export default function SneakersPage() {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

    return (
        <DefaultLayout>
            <Catalog list={sneakers}/>
        </DefaultLayout>
    )
}