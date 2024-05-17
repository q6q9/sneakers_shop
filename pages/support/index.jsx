import {title} from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import React from "react";
import {Link} from "@nextui-org/link";

export default function DocsPage() {
    return (
        <DefaultLayout>
            <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
                <div className='inline-block max-w-lg text-center justify-center '>
                    <h1 className={title()}>Служба поддержки</h1>
                    <p className='my-10'>
                        У вас возникли вопросы или проблемы? Наши специалисты всегда готовы помочь вам!
                    </p>

                    <p>
                        Вы можете связаться с нами по следующим контактам:
                    </p>

                    <div className='flex flex-col items-center justify-center gap-4 my-5 text-2xl'>
                        <p>
                            Почта: <span>  <Link href='mailto:evsv.mx@gmail.com' className='text-2xl'>sneakers_support@gmail.com</Link></span>
                        </p>
                        <p>
                            Телеграм: <span>  <Link href='https://t.me/evsvmx' className='text-2xl'>@sneakers_support</Link></span>

                        </p>
                        <p>
                            Телефон: <span>  <Link href='tel:+79895040086' className='text-2xl'>+79876543210</Link></span>
                        </p>

                    </div>

                    Наши операторы работают круглосуточно и готовы ответить на все ваши вопросы. Не стесняйтесь
                    обращаться к нам - мы всегда рады помочь!

                    С уважением, SNEAKERS SHOP.
                </div>
            </section>
        </DefaultLayout>
    )
}
