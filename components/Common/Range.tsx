import React from 'react';
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const StyledTitle = styled.p`
  color: #423F45;
  font-family: 'Helvetica', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
`

const theme = createTheme({
    components: {
        MuiSlider: {
            styleOverrides: {
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
                    "&:after": {
                        left: '100px'
                    }
                },
                rail: {
                    width: '100%',
                    opacity: '1',
                    // left: '4%'
                },
                track: {}
            },

        },
    },
});


type RangePropsType = {
    title: string
    onChangeRange?: (value: number) => void
    minValue: number
    maxValue: number
    step: number
    initValue: number
    disabled: boolean
    units: string[]
}

type MarkType = {
    value: number
    label: string
}

export const Range: React.FC<RangePropsType> = (
    {
        title, onChangeRange, initValue, minValue,
        maxValue, step, disabled, units
    }) => {

    const [value, setValue] = React.useState<number>(initValue);

    const marks: MarkType[] = [];

    // do marks for scale
    for (let i = 0; i < units.length; i++) {
        marks.push(
            {
                value: i === 0 ? 0 : step * i,
                label: units[i]
            })
    }
    // calculation for label value
    // const valueLabelFormat = (value: number) => {
    //     let unitIndex = 0;
    //     for (let i = 0; i < units.length; i++) {
    //         if (value === +units[0]) unitIndex = 0
    //         if (+units[i - 1] < value && value < +units[i]) unitIndex = i
    //     }
    //     return `${units[unitIndex]}`;
    // }

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number)
        setValue(newValue as number)
    }

    return (
        <>
            <StyledTitle>{title}</StyledTitle>
            <ThemeProvider theme={theme}>
                <Slider
                    size="small"
                    value={value}
                    min={minValue}
                    step={step}
                    max={maxValue}
                    defaultValue={minValue}
                    onChange={handleChange}
                    marks={marks}
                    disabled={disabled}
                    style={{color: '#FFD748', height: 23}}
                />
            </ThemeProvider>
        </>
    );
};