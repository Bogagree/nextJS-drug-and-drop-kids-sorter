import Head from 'next/head';
import React, {FC, useEffect, useState} from 'react';
import {GameItem} from '../components/GameItem/GameItem';

type GamePropsType = {
    unitsType: boolean
    unitsValue: number
}

type ItemType = {
    id: number
    value: string
}

const Game: FC<GamePropsType> = ({unitsType, unitsValue}) => {

    const [items, setItems] = useState<ItemType[]>([])

    const generateItems = (newItems: ItemType[], unitsValue: number) => {
        for (let i = 0; i < unitsValue; i++) {
            newItems.push({id: i, value: `${i}`})
        }
        console.log(newItems)
        return newItems
    }

    useEffect(() => {

        setTimeout((() => {
            let asyncItems: ItemType[] = []
            generateItems(asyncItems, 2)
            setItems(asyncItems)
        }), 3000)
    }, [])

    return (
        <>
            <Head><title>Игра</title></Head>

            <h1>Game page</h1>

            {items.map(item => <GameItem key={item.id} id={item.id.toString()} value={item.value}/>)}
        </>
    );
};

export default Game