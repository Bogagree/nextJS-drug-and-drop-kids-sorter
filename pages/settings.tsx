import {Button} from '../components/Common/Button';
import BackgroundLayout from '../components/Layout/BackgroundLayout';
import Head from 'next/head';
import {Range} from '../components/Common/Range';
import {BorderDiv,  DivElements, InnerBorderDiv} from '../components/Common/DivElements';

// const bg = [bgSettings, bg1, bg2, bg3, bg4]

export default function Settings() {


    const units = ['A', '9', '19', '50', '99', '999'];

    return (
        <>
            <Head>
                <title>Настройки игры</title>
            </Head>

            <BackgroundLayout>

                <BorderDiv>

                    <InnerBorderDiv>

                        <DivElements style={{width:531, height: 114}}>
                            <Range
                            title={'Значение'}
                            initValue={1}
                            minValue={0}
                            maxValue={25}
                            step={5}
                            units={units}
                            // scale={calculateValue}
                            // getAriaValueText={valueLabelFormat}
                            // valueLabelFormat={valueLabelFormat}
                            // onChange={handleChange}
                            disabled={false}

                        />
                            <Button>Играть</Button>
                        </DivElements>



                    </InnerBorderDiv>
                </BorderDiv>

            </BackgroundLayout></>
    );
};