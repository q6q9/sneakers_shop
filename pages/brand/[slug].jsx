import { title } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import NextLink from "next/link";
import {Link} from "@nextui-org/link";
import {useRouter} from "next/router";
import {brands, sneakers} from "../../services/sneakers_repository";
import Catalog from "../../components/catalog";

export default function BrandPage() {
    const slug = useRouter().query.slug

    const brand = brands.find(e => e.toLowerCase().replaceAll(' ', '_') === slug)

    console.log(brand)
    return (
        <DefaultLayout>
            <section className='flex flex-col items-center justify-center gap-4 '>
                <div className='inline-block max-w-lg text-center justify-center'>
                    <h1 className={title()}>{brand}</h1>
                </div>
            </section>
            <div className='mt-10'>
                <Catalog list={sneakers} className='my-10'/>
            </div>
        </DefaultLayout>
    )
}
