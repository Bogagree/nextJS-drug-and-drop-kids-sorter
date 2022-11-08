import React from 'react';
import {ColumnType, GameItemType} from '../../types/stateTypes';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import {GameItem} from './GameItem/GameItem';

type ItemsForGamePropsType = {
    column: ColumnType
    gameItems: GameItemType[]
}

const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? 'lightblue' : 'red',
    display: 'flex',
    gap: '5px',
    padding: '5px',
    // overflow: 'auto',
});

const getGameItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: 10,
    marginBottom: 15,
    background: isDragging ? "#4acdf1" : "#1ca322",
    borderRadius: isDragging ? "50%" : "5px",

    ...draggableStyle
})

const ItemsForGame: React.FC<ItemsForGamePropsType> = ({column, gameItems}) => {
    return (
        <>
            <h1>{column.title}</h1>
            <div>
                <Droppable droppableId={column.id}>
                    {(droppableProvided, droppableSnapshot) => (
                        <div
                             ref={droppableProvided.innerRef}
                             style={getListStyle(droppableSnapshot.isDraggingOver)}
                             {...droppableProvided.droppableProps}
                        >
                            {gameItems.map((gameItem, index) => (
                                <Draggable key={gameItem.id} draggableId={`${gameItem.id}`} index={index}>
                                    {(draggableProvided, draggableSnapshot) => (
                                        <div ref={draggableProvided.innerRef}
                                             {...draggableProvided.draggableProps}
                                             {...draggableProvided.dragHandleProps}
                                             style={getGameItemStyle(draggableSnapshot.isDragging, draggableProvided.draggableProps.style)}
                                        >

                                            <GameItem gameItem={gameItem}/>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </div>
        </>
    );
};

export default ItemsForGame;