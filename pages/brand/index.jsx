import { title } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import NextLink from "next/link";
import {Link} from "@nextui-org/link";
import {brands} from "../../services/sneakers_repository";

export default function BrandPage() {

  return (
    <DefaultLayout>
      <section className='flex flex-col items-center justify-center gap-4 '>
        <div className='inline-block max-w-lg text-center justify-center'>
          <h1 className={title()}>Бренды</h1>
            <div className='flex flex-wrap items-center justify-center gap-7 mt-10'>
                {brands.map((e,i) =>(<NextLink
                    href={`/brand/${e.toLowerCase().replaceAll(' ', '_')}`}
                    key={i}
                    style={{color: '#0e6478'}}
                >
                    {e}
                </NextLink>))}
            </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
