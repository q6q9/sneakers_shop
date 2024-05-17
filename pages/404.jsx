import {Link} from "@nextui-org/link";
import {Snippet} from "@nextui-org/snippet";
import {Code} from "@nextui-org/code";
import {button as buttonStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import NextLink from "next/link";
import {Button} from "@nextui-org/react";

export default function Custom404() {

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title({color: "violet"})}>Ошибка 404</h1>
                    <h1 className={title()}>- страница не найдена</h1>
                    <br/>

                    <Button size="lg" as={NextLink} href="/" color="secondary" className='mt-10'>
                        Вернуться на сайт
                    </Button>
                </div>
            </section>
        </DefaultLayout>
    );
}
