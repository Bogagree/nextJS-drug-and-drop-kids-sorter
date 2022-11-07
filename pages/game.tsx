import Head from 'next/head';
import React, {FC, useEffect, useState} from 'react';
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
import {DragDropContext, Draggable, Droppable, DropResult, resetServerContext} from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import {GetServerSideProps} from 'next';

type GamePropsType = {
    unitsType: boolean
    unitsValue: number
}

const bg = [bg1, bg2, bg3, bg4]
const slots = [slot1, slot2, slot3, slot4]

const getGameItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: 10,
    margin: `0 50px 15px 50px`,
    background: isDragging ? "#4acdf1" : "#1ca322",
    borderRadius: isDragging ? "50%" : "5px",

    ...draggableStyle
})

const DnDContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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


    const onDragEnd = (result: DropResult) => {
        const {source, destination} = result
        if (!destination) return

        const items = Array.from(gameItems)
        // const items = [...gameItems]

        const [newOrder] = items.splice(source.index, 1)

        items.splice(destination.index, 0, newOrder)

        setGameItems(items)
    }

    useEffect(() => {

        setTimeout((() => {
            let asyncItems: GameItemType[] = []
            generateItems(asyncItems, 5)
            setGameItems(asyncItems)
        }), 3000)
    }, [])

    resetServerContext()

    return (
        <>
            <Head><title>Игра</title></Head>
            <h1>Game page</h1>

            <BackgroundLayout src={bg[0].src}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={'gameItems'}>
                        {(provided) => (
                            <div className={'gameItems'} {...provided.droppableProps} ref={provided.innerRef}>
                                {gameItems.map((item, index) => {
                                    return (
                                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getGameItemStyle(snapshot.isDragging,
                                                        provided.draggableProps.style)}
                                                >
                                                    {<GameItem gameItem={item}/>}
                                                    <div>{item.id}</div>
                                                </div>

                                            )}
                                        </Draggable>)
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <DivColumn>


                        <DivSpaceBetween>

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
                </DragDropContext>

            </BackgroundLayout>
        </>
    );
};

export default Game