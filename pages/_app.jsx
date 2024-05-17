import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {fontSans, fontMono} from "@/config/fonts";
import {useRouter} from 'next/router';
import "@/styles/globals.css";
import {useEffect} from "react";
import {useBasketStore} from "./state/basket_store";

export default function App({Component, pageProps}) {
    const router = useRouter();


    const init = useBasketStore(state => state.init)
    useEffect(() => {
        init()
    }, [])

    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider>
                <Component {...pageProps} />
            </NextThemesProvider>
        </NextUIProvider>
    );
}

export const fonts = {
    sans: fontSans.style.fontFamily,
    mono: fontMono.style.fontFamily,
};
