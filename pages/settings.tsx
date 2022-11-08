import {ButtonPlay} from '../src/components/Buttons/ButtonPlay';
import Head from 'next/head';
import {RangeSlider} from '../src/components/settingsPageComponents/RangeSlider/RangeSlider';
import {BorderDiv, InnerBorderDiv} from '../src/components/DivStyled/DivGradientBorder';
import {DivColumn} from '../src/components/DivStyled/DivColumn';
import {ButtonGameOrder} from '../src/components/Buttons/ButtonGameOrder';
import {DivSpaceBetween} from '../src/components/DivStyled/DivSpaceBetween';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {BackgroundLayout} from '../src/components/Layout/BackgroundLayout';
import bgSettings from "../public/img/backgrounds/background_settings.png"


export const gameNumberOfItemsUnits = ['2', '3', '4', '5'];
export const gameValueUnits = ['A', '9', '19', '50', '99', '999'];


export default function Settings() {

    const [gameOrder, setGameOrder] = useState(false)
    const [gameValue, setGameValue] = useState(0)
    const [gameItems, setGameItems] = useState(2)

    const router = useRouter()

    const gameOrderHandle = () => {
        setGameOrder(!gameOrder)
    }

    const gameValueChanger = (value: number) => {
        setGameValue(value)
    }

    const gameItemsChanger = (value: number) => {
        setGameItems(value)
    }

    const startGame = () => {

        router.push('/game')
    }

    return (
        <>
            <Head>
                <title>Настройки игры</title>
            </Head>

            <BackgroundLayout src={bgSettings.src} >

                <BorderDiv>
                    <InnerBorderDiv>
                        <DivColumn>

                            <div style={{width: 366, height: 112}}>
                                <RangeSlider title={'Кол-во предметов'} units={gameNumberOfItemsUnits}
                                             onChangeRange={gameItemsChanger}/>
                            </div>

                            <div style={{width: 541, height: 114}}>
                                <RangeSlider title={'Значение'} units={gameValueUnits}
                                             onChangeRange={gameValueChanger}/>
                            </div>

                            <DivSpaceBetween>
                                <ButtonGameOrder disabled={gameOrder}
                                                 onClick={gameOrderHandle}>По возрастанию</ButtonGameOrder>
                                <ButtonGameOrder disabled={!gameOrder}
                                                 onClick={gameOrderHandle}>По убыванию</ButtonGameOrder>
                            </DivSpaceBetween>

                            <ButtonPlay onClick={startGame}>Играть</ButtonPlay>

                        </DivColumn>

                    </InnerBorderDiv>
                </BorderDiv>

            </BackgroundLayout></>
    );
};