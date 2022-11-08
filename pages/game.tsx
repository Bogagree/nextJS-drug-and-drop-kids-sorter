import Head from 'next/head';
import React, {FC, useEffect, useState} from 'react';
import {BackgroundLayout} from '../src/components/Layout/BackgroundLayout';
import bg1 from '../public/img/backgrounds/game_background1.png'
import bg2 from '../public/img/backgrounds/game_background2.png'
import bg3 from '../public/img/backgrounds/game_background3.png'
import bg4 from '../public/img/backgrounds/game_background4.png'
import slot1 from '../public/img/slots/slots1.png'
import slot2 from '../public/img/slots/slots2.png'
import slot3 from '../public/img/slots/slots3.png'
import slot4 from '../public/img/slots/slots4.png'
import {DragDropContext, Draggable, Droppable, DropResult, resetServerContext} from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import {GameItemType, GameStateType} from '../src/types/stateTypes';
import initialGameState from '../state/state';
import ItemsForGame from '../src/components/gamePageComponents/ItemsForGame';

type GamePropsType = {
    unitsType: boolean
    unitsValue: number
}

const bg = [bg1, bg2, bg3, bg4]
const slots = [slot1, slot2, slot3, slot4]

const getGameItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: 10,
    marginBottom: 15,
    background: isDragging ? "#4acdf1" : "#1ca322",
    borderRadius: isDragging ? "50%" : "5px",

    ...draggableStyle
})

const getSlotItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: 10,
    marginBottom: 15,
    background: isDragging ? "#a66cda" : "#f9b601",
    borderRadius: isDragging ? "50%" : "5px",

    ...draggableStyle
})

const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'flex',
    padding: '5px',
    overflow: 'auto',
});

const Game: FC<GamePropsType> = ({unitsType, unitsValue}) => {

    const [gameState, setGameState] = useState<GameStateType>(initialGameState)

    const generateItems = (newItems: GameItemType[], unitsValue: number) => {
        for (let i = 0; i < unitsValue; i++) {
            newItems.push({ id: `${i}`, value: i})
        }
        console.log(newItems)
        return newItems
    }

    const onDragEnd = (result: DropResult) => {
        const {source, destination} = result
        // if tries drop in undefined destination
        if (!destination) return

        // if drag and drop same position
        // if (destination.droppableId === source.droppableId && destination.index === source.index) {
        //     return
        // }

        //if user drops within the same column in a different position

        // const items = Array.from(gameItems)
        // if (gameState) {
        //     const row = gameState
        //     const items = [...gameState.gameItems]
        //
        //     const [newOrder] = items.splice(source.index, 1)
        //
        //     items.splice(destination.index, 0, newOrder)
        //
        //     setGameState({...gameState, gameItems: [...items]})
        // }
    }

    // useEffect(() => {
    //
    //     setTimeout((() => {
    //         let asyncItems: GameItemType[] = []
    //         generateItems(asyncItems, 5)
    //
    //         setGameState({
    //             ...gameState, gameItems: { ['newId']: {id: '12', value: 12}}
    //         })
    //     }), 3000)
    // }, [])

    return (
        <>
            <Head><title>Игра</title></Head>
            <h1>Game page</h1>

            <BackgroundLayout src={bg[0].src}>
                <DragDropContext onDragEnd={onDragEnd}>

                    {gameState.columnOrders.map((columnId) => {
                        const column = gameState.columns[columnId];
                        const gameItems = column.gameItemIds.map((gameItemId) => gameState.gameItems[gameItemId]);
                        return <ItemsForGame column={column} gameItems={gameItems}/>
                    })}

                </DragDropContext>
            </BackgroundLayout>
        </>
    );
};

export default Game