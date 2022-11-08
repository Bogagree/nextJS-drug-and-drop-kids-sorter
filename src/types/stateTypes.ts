export type GameStateType = {
    gameItems: {
        [key: string]: GameItemType
    },
    columns: {
        [key: string]: ColumnType
    },
    columnOrders: string[]
}

export type GameItemType = {
    id: string
    value: number
}

export type ColumnType = {
    id: string
    title: string
    gameItemIds: string[]
}