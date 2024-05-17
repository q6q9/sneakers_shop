export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "SNEAKERS SHOP",
    description: "Интернет-магазин кроссовок",
    navItems: [
        {
            label: "Кроссовки",
            href: "/sneakers",
        },
        {
            label: "Бренды",
            href: "/brand",
        },
        {
            label: "Служба поддержки",
            href: "/support",
        },
        {
            label: "О нас ",
            href: "/about",
        },
    ],
    navMenuItems: [
        {
            label: "Кроссовки",
            href: "/sneakers",
        },
        {
            label: "Бренды",
            href: "/brand",
        },
        {
            label: "Служба поддержки",
            href: "/support",
        },
        {
            label: "О нас ",
            href: "/about",
        },
        {
            label: "Профиль",
            href: "/user",
        }
    ],
    links: {
        telegram: "https://t.me/evsvmx",
    },
};
