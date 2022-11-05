import Head from 'next/head';
import React, {DragEvent, FC, useEffect, useState} from 'react';
import {GameItem, GameItemType} from '../components/GameItem/GameItem';
import {BackgroundLayout} from '../components/Common/Layout/BackgroundLayout';
import bg1 from '../public/img/backgrounds/game_background1.png'
import bg2 from '../public/img/backgrounds/game_background2.png'
import bg3 from '../public/img/backgrounds/game_background3.png'
import bg4 from '../public/img/backgrounds/game_background4.png'
import slot1 from '../public/img/slots/slots1.png'
import slot2 from '../public/img/slots/slots2.png'
import slot3 from '../public/img/slots/slots3.png'
import slot4 from '../public/img/slots/slots4.png'
import {DivColumn} from '../components/Common/DivStyled/DivColumn';
import {DivSpaceBetween} from '../components/Common/DivStyled/DivSpaceBetween';
import {DropItemContainer, ItemsDropContainer, ItemsSlotWrapper} from '../components/ItemsSlot/ItemsSlot';

type GamePropsType = {
    unitsType: boolean
    unitsValue: number
}


const bg = [bg1, bg2, bg3, bg4]
const slots = [slot1, slot2, slot3, slot4]

const Game: FC<GamePropsType> = ({unitsType, unitsValue}) => {

    const [gameItems, setGameItems] = useState<GameItemType[]>([])
    const [currentCard, setCurrentCard] = useState<GameItemType | null>(null)

    const generateItems = (newItems: GameItemType[], unitsValue: number) => {
        for (let i = 0; i < unitsValue; i++) {
            newItems.push({id: i, value: `${i}`, order: i})
        }
        console.log(newItems)
        return newItems
    }

    const dragStartHandle = (e: DragEvent<HTMLDivElement>, gameItem: GameItemType) => {
        console.log('drag', gameItem)
        setCurrentCard(gameItem)
    };

    const dragEndHandle = (e: DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.opacity = '1'
    }

    const dragOverHandle = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.currentTarget.style.opacity = '0'
    };

    const dropHandle = (e: DragEvent<HTMLDivElement>, gameItem: GameItemType) => {
        e.preventDefault()
        console.log('drop', gameItem)
    };

    const sortGameItems = (dragItem: GameItemType, dropItem: GameItemType) => {
        if (dragItem.order > dropItem.order) {
            return 1
        } else {
            return -1
        }
    }

    useEffect(() => {

        setTimeout((() => {
            let asyncItems: GameItemType[] = []
            generateItems(asyncItems, 5)
            setGameItems(asyncItems)
        }), 3000)
    }, [])

    return (
        <>
            <Head><title>Игра</title></Head>
            <h1>Game page</h1>

            <BackgroundLayout src={bg[0].src}>
                <DivColumn>
                    <DivSpaceBetween>
                        {gameItems.sort(sortGameItems).map(item => <GameItem key={item.id}
                                                         gameItem={item}
                                                         dragStartHandle={dragStartHandle}
                                                         dragEndHandle={dragEndHandle}
                                                         dragOverHandle={dragOverHandle}
                                                         dropHandle={dropHandle}

                        />)}
                    </DivSpaceBetween>

                    <div style={{width: '100%'}}>
                        <ItemsSlotWrapper src={slots[0].src}>
                            <ItemsDropContainer>
                                <DropItemContainer/>
                                <DropItemContainer/>
                                <DropItemContainer/>
                                <DropItemContainer/>
                                <DropItemContainer/>
                            </ItemsDropContainer>

                        </ItemsSlotWrapper>
                    </div>
                </DivColumn>
            </BackgroundLayout>
        </>
    );
};

export default Game