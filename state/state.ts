import {GameStateType} from '../src/types/stateTypes';

const initialGameState: GameStateType = {
    gameItems: {
        'gameItem-1': {id: '1', value: 1},
        'gameItem-2': {id: '2', value: 2},
        'gameItem-3': {id: '3', value: 3},
        'gameItem-4': {id: '4', value: 3},
        'gameItem-5': {id: '5', value: 3}
    },
    columns: {
        'row-gameItems': {
            id: 'row-gameItems',
            title: 'Game items',
            gameItemIds: ['gameItem-1', 'gameItem-2', 'gameItem-3', 'gameItem-4', 'gameItem-5']
        },
        'row-slots': {
            id: 'row-slots',
            title: 'Slots',
            gameItemIds: ['gameItem-1', 'gameItem-2', 'gameItem-3', 'gameItem-4', 'gameItem-5']
        }
    },
    columnOrders: ['row-gameItems', 'row-slots']
}

export default initialGameState