import {
    Button,
    Kbd,
    Link,
    Input,
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem, Badge,
} from "@nextui-org/react";

import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon, TelegramIcon, BasketLogo,
} from "@/components/icons";

import {Logo} from "@/components/icons";
import {useRouter} from "next/router";
import {useBasketStore, useTotalBasket} from "@/pages/state/basket_store";

export const Navbar = () => {
    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Поиск..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0"/>
            }
            type="search"
        />
    );

    const basket = useBasketStore(state => state.basket)

    const totalCount = useTotalBasket()
    console.log(totalCount)
    const router = useRouter()
    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Logo/>
                        <p className="font-bold text-inherit">SNEAKERS SHOP</p>
                    </NextLink>
                </NavbarBrand>
                <div className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href} isActive={router.pathname === item.href}>
                            <NextLink
                                className={clsx(
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </div>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link isExternal href={siteConfig.links.telegram}>
                        <TelegramIcon className="text-default-500"/>
                    </Link>
                    <ThemeSwitch/>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>

                <Button as={NextLink} href="/basket" variant="flat">
                    <Badge color='secondary'  placement="bottom-left" content={totalCount} ><BasketLogo/></Badge>
                    Корзина
                </Button>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <ThemeSwitch/>
                <NavbarMenuToggle/>
            </NavbarContent>

            <NavbarMenu>

                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <NextLink
                                color={
                                    index === 2
                                        ? "primary"
                                        : index === siteConfig.navMenuItems.length - 1
                                            ? "danger"
                                            : "foreground"
                                }
                                href={item.href}
                                size="lg"
                            >
                                {item.label}
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
