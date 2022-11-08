import Head from 'next/head';
import React, {FC, useEffect, useState} from 'react';
import {GameItem} from '../src/components/gamePageComponents/GameItem/GameItem';
import {BackgroundLayout} from '../src/components/Layout/BackgroundLayout';
import bg1 from '../public/img/backgrounds/game_background1.png'
import bg2 from '../public/img/backgrounds/game_background2.png'
import bg3 from '../public/img/backgrounds/game_background3.png'
import bg4 from '../public/img/backgrounds/game_background4.png'
import slot1 from '../public/img/slots/slots1.png'
import slot2 from '../public/img/slots/slots2.png'
import slot3 from '../public/img/slots/slots3.png'
import slot4 from '../public/img/slots/slots4.png'
import {DropItemContainer, ItemsDropContainer, ItemsSlotWrapper} from '../src/components/gamePageComponents/SlotItems/ItemsSlot';
import {DragDropContext, Draggable, Droppable, DropResult, resetServerContext} from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import {GameItemType, GameStateType} from '../src/types/stateTypes';
import initialGameState from '../state/state';

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

const DnDContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const GameCopy: FC<GamePropsType> = ({unitsType, unitsValue}) => {

    // const [gameState, setGameState] = useState<GameStateType>(initialGameState)
    //
    // const generateItems = (newItems: GameItemType[], unitsValue: number) => {
    //     for (let i = 0; i < unitsValue; i++) {
    //         newItems.push({ id: `${i}`, value: i})
    //     }
    //     console.log(newItems)
    //     return newItems
    // }
    //
    // const onDragEnd = (result: DropResult) => {
    //     const {source, destination} = result
    //     // if tries drop in undefined destination
    //     if (!destination) return
    //
    //     // if drag and drop same position
    //     // if (destination.droppableId === source.droppableId && destination.index === source.index) {
    //     //     return
    //     // }
    //
    //     //if user drops within the same column in a different position
    //
    //     // const items = Array.from(gameItems)
    //     // if (gameState) {
    //     //     const row = gameState
    //     //     const items = [...gameState.gameItems]
    //     //
    //     //     const [newOrder] = items.splice(source.index, 1)
    //     //
    //     //     items.splice(destination.index, 0, newOrder)
    //     //
    //     //     setGameState({...gameState, gameItems: [...items]})
    //     // }
    // }
    //
    // useEffect(() => {
    //
    //     setTimeout((() => {
    //         let asyncItems: GameItemType[] = []
    //         generateItems(asyncItems, 5)
    //         setGameState({
    //             ...gameState, gameItems: { ['newId']: {id: '12', value: 12}}
    //         })
    //     }), 3000)
    // }, [])

    return (
        <>
            <h1>Game Copy</h1>

            {/*<Head><title>Игра</title></Head>*/}
            {/*<h1>Game experimental copy</h1>*/}

            {/*<BackgroundLayout src={bg[0].src}>*/}

            {/*    <DragDropContext onDragEnd={onDragEnd}>*/}

                    {/*<Droppable droppableId={'gameItems'}>*/}
                    {/*    {(provided, snapshot) => (*/}
                    {/*        <div className={'gameItems'}*/}
                    {/*             {...provided.droppableProps}*/}
                    {/*             style={getListStyle(snapshot.isDraggingOver)}*/}
                    {/*             ref={provided.innerRef}*/}
                    {/*        >*/}
                    {/*            {gameState.columnOrders.map((gameItem, index) => {*/}
                    {/*                return (*/}
                    {/*                    <Draggable key={gameItem.id} draggableId={gameItem.id.toString()} index={index}>*/}
                    {/*                        {(provided, snapshot) => (*/}
                    {/*                            <div*/}
                    {/*                                ref={provided.innerRef}*/}
                    {/*                                {...provided.draggableProps}*/}
                    {/*                                {...provided.dragHandleProps}*/}
                    {/*                                style={getGameItemStyle(snapshot.isDragging,*/}
                    {/*                                    provided.draggableProps.style)}*/}
                    {/*                            >*/}
                    {/*                                {<GameItem gameItem={gameItem}/>}*/}
                    {/*                            </div>*/}
                    {/*                        )}*/}
                    {/*                    </Draggable>)*/}
                    {/*            })}*/}

                    {/*            {provided.placeholder}*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</Droppable>*/}


                    {/*<Droppable droppableId={'slotItems'}>*/}
                    {/*    {(provided) => (*/}
                    {/*        <ItemsSlotWrapper src={slots[0].src} className={'slotItems'}*/}
                    {/*                          {...provided.droppableProps}*/}
                    {/*                          ref={provided.innerRef}*/}
                    {/*        >*/}

                    {/*            <ItemsDropContainer>*/}
                    {/*                <Draggable draggableId={'1'} index={6}>*/}
                    {/*                    {(provided, snapshot) => (*/}
                    {/*                        <div*/}
                    {/*                            ref={provided.innerRef}*/}
                    {/*                            {...provided.draggableProps}*/}
                    {/*                            {...provided.dragHandleProps}*/}
                    {/*                        >*/}
                    {/*                            <DropItemContainer/>*/}
                    {/*                        </div>*/}
                    {/*                    )}*/}
                    {/*                </Draggable>*/}
                    {/*            </ItemsDropContainer>*/}

                    {/*            {provided.placeholder}*/}
                    {/*        </ItemsSlotWrapper>*/}
                    {/*    )}*/}
                    {/*</Droppable>*/}


            {/*    </DragDropContext>*/}

            {/*</BackgroundLayout>*/}
        </>
    );
};

export default GameCopy