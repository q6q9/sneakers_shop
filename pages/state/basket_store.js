import {create} from 'zustand'
import {sneakers} from "@/services/sneakers_repository";

export const useBasketStore = create((set) => ({
    basket: {},
    init: () => set((state) => {
        return {basket: JSON.parse(localStorage.getItem('basket'))}
    }),
    addItem: (id, size) => set((state) => {
        const newBasket = {...state.basket}
        if (!newBasket[id]) {
            newBasket[id] = {...newBasket[id], [size]: 1}
        } else {
            state.basket[id][size] = (state.basket[id][size] || 0) + 1;
        }

        localStorage.setItem('basket', JSON.stringify(newBasket))
        return {basket: newBasket}
    }),
    deleteItem: (id, size) => set((state) => {
        const newBasket = {...state.basket}

        if (!newBasket[id]) {
            localStorage.setItem('basket', JSON.stringify(newBasket))
            return {basket: newBasket}
        }

        if (newBasket[id][size] === 1) {
            delete newBasket[id][size]
            localStorage.setItem('basket', JSON.stringify(newBasket))
            return {basket: newBasket}
        }

        newBasket[id][size] -= 1
        localStorage.setItem('basket', JSON.stringify(newBasket))
        return {basket: newBasket}
    }),
    clear: () => set(() => {
        localStorage.removeItem('basket')
        return {basket: {}}
    }),
}))

export const useTotalBasket = () => {
    const basket = useBasketStore(state => state.basket)
    let count = 0;
    for (const id in basket) {
        for (const size in basket[id]) {
            count += basket[id][size];
        }
    }
    return count;
}

export const useTotalSumBasket = () => {
    const basket = useBasketStore(state => state.basket)
    let totalSum = 0;
    for (const id in basket) {
        for (const size in basket[id]) {
            const sneaker = sneakers[id];
            const quantity = basket[id][size];
            totalSum += sneaker.price * quantity;
        }
    }
    return totalSum;
}
