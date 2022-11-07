import React, {ElementType, FC} from 'react';
import styled from '@emotion/styled'
import treeToy1 from '../../public/img/gameToys/cristmasTreeToys/treeToy1.png'
import treeToy2 from '../../public/img/gameToys/cristmasTreeToys/treeToy2.png'
import treeToy3 from '../../public/img/gameToys/cristmasTreeToys/treeToy3.png'
import treeToy4 from '../../public/img/gameToys/cristmasTreeToys/treeToy4.png'
import treeToy5 from '../../public/img/gameToys/cristmasTreeToys/treeToy5.png'
import sweet1 from '../../public/img/gameToys/sweet/sweet1.png'
import sweet2 from '../../public/img/gameToys/sweet/sweet2.png'
import sweet3 from '../../public/img/gameToys/sweet/sweet3.png'
import sweet4 from '../../public/img/gameToys/sweet/sweet4.png'
import coin1 from '../../public/img/gameToys/coins/coin1.png'
import coin2 from '../../public/img/gameToys/coins/coin2.png'
import coin3 from '../../public/img/gameToys/coins/coin3.png'


const itemsBg = {
    coins: [coin1, coin2, coin3],
    sweet: [sweet1, sweet2, sweet3, sweet4],
    treeToys: [treeToy1, treeToy2, treeToy3, treeToy4, treeToy5]
}


export type ImageProps = {
    src: string
    children: React.ReactNode | ElementType
}

const ItemDiv = styled.div<ImageProps>`
  width: 157px;
  height: 158px;
  cursor: grab;

  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`

export type GameItemPropsType = {
    gameItem: GameItemType
}

export type GameItemType = {
    id: number
    order: number
    value: string
}


export const GameItem: FC<GameItemPropsType> = (props) => {

    return (
        <>
            <ItemDiv id={`${props.gameItem.id}`}
                     src={itemsBg.treeToys[0].src}
            >
                {props.gameItem.id}
            </ItemDiv>

        </>
    );
};