import {ButtonPlay} from '../components/Common/Buttons/ButtonPlay';
import BackgroundLayout from '../components/Common/Layout/BackgroundLayout';
import Head from 'next/head';
import {RangeSlider} from '../components/RangeSlider/RangeSlider';
import {BorderDiv, InnerBorderDiv} from '../components/Common/DivStyled/DivGradientBorder';
import {DivCenterStyled} from '../components/Common/DivStyled/DivCenter';
import {ButtonGameOrder} from '../components/Common/Buttons/ButtonGameOrder';
import {DivSpaceBetween} from '../components/Common/DivStyled/DivSpaceBetween';
import {useState} from 'react';

export default function Settings() {

    const gameNumberOfItemsUnits = ['2', '3', '4', '5'];
    const gameValueUnits = ['A', '9', '19', '50', '99', '999'];

    const [gameOrder, setGameOrder] = useState(false)
    const [gameValue, setGameValue] = useState(0)
    const [gameItems, setGameItems] = useState(2)

    const gameOrderHandle = () => {
        setGameOrder(!gameOrder)
    }

    const gameValueChanger = (value: number) => {
        setGameValue(value)
    }

    const gameItemsChanger = (value: number) => {
        setGameItems(value)
    }

    console.log('gameItems:', gameItems)
    console.log('gameValue:', gameValue)
    console.log('gameOrder:', gameOrder)

    return (
        <>
            <Head>
                <title>Настройки игры</title>
            </Head>

            <BackgroundLayout>

                <BorderDiv>
                    <InnerBorderDiv>
                        <DivCenterStyled>

                            <div style={{width: 366, height: 112}}>
                                <RangeSlider title={'Кол-во предметов'} units={gameNumberOfItemsUnits}
                                             onChangeRange={gameItemsChanger}/>
                            </div>

                            <div style={{width: 541, height: 114}}>
                                <RangeSlider title={'Значение'} units={gameValueUnits}
                                             onChangeRange={gameValueChanger}/>
                            </div>

                            <DivSpaceBetween >
                                <ButtonGameOrder disabled={gameOrder} onClick={gameOrderHandle}>По
                                    возрастанию</ButtonGameOrder>
                                <ButtonGameOrder disabled={!gameOrder} onClick={gameOrderHandle}>По
                                    убыванию</ButtonGameOrder>
                            </DivSpaceBetween>

                            <ButtonPlay>Играть</ButtonPlay>

                        </DivCenterStyled>

                    </InnerBorderDiv>
                </BorderDiv>

            </BackgroundLayout></>
    );
};