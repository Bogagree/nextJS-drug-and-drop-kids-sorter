import React from 'react';
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const SettingsSliderTitle = styled.p`
  color: #423F45;
  font-family: 'Helvetica', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  margin: 0 0 35px;
`

const theme = createTheme({
    components: {
        MuiSlider: {
            styleOverrides: {
                root: {
                  margin: '0'
                },
                markLabel: {
                    fontSize: '24px',
                    fontWeight: '700',
                    fontFamily: 'Calibri',
                    top: '-30px',
                    left: '-30px',
                    color: "#4F4B61",
                    '&[data-index="5"]': {
                        paddingRight: '40px',
                    },
                    "&:active": {}
                },
                mark: {
                    display: 'none',
                },
                thumb: {
                    height: '23px',
                    width: '23px',
                    color: '#104987',
                },
                rail: {
                    opacity: '1',
                },
                track: {}
            },

        },
    },
});

type RangePropsType = {
    title: string
    onChangeRange?: (value: number) => void
    units: string[]
}

type MarkType = {
    value: number
    label: string
}

export const RangeSlider: React.FC<RangePropsType> = (
    {
        title, onChangeRange, units
    }) => {

    const [value, setValue] = React.useState<number>(0);

    const marks: MarkType[] = [];

    // do marks for scale
    for (let i = 0; i < units.length; i++) {
        marks.push(
            {
                value: i === 0 ? 0 : i,
                label: units[i]
            })
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number)
        setValue(newValue as number)
    }

    return (
        <>
            <SettingsSliderTitle>{title}</SettingsSliderTitle>
            <ThemeProvider theme={theme}>
                <Slider
                    size="small"
                    value={value}
                    min={0}
                    step={1}
                    max={units.length-1}
                    onChange={handleChange}
                    marks={marks}
                    style={{color: '#FFD748', height: 23}}
                />
            </ThemeProvider>
        </>
    );
};