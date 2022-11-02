import React from 'react';
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled';
import {Tooltip} from '@mui/material';
import {UnitsRangeElement} from './DivElements';

const StyledTitle = styled.p`
  color: #423F45;
  font-family: 'Helvetica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
`

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

    const valueLabelFormat = (value: number) => {
        let unitIndex = 0;
        for (let i = 0; i < units.length; i++) {
            if (value === +units[0]) unitIndex = 0
            if (+units[i - 1] < value && value < +units[i]) unitIndex = i
        }
        return ` ${units[unitIndex]}`;
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number)
        setValue(newValue as number)
    }

    return (
        <>
            <StyledTitle>{title}</StyledTitle>
            <UnitsRangeElement>
                {units.map(unit => <div key={unit}>{unit}</div>)}
            </UnitsRangeElement>
            <Slider
                size="small"
                value={value}
                min={minValue}
                step={step}
                max={maxValue}
                // getAriaValueText={valueLabelFormat}
                // valueLabelFormat={valueLabelFormat}
                onChange={handleChange}
                // valueLabelDisplay="off"
                marks={marks}
                disabled={disabled}
                style={{color: 'gold', height: 8}}
            />
        </>
    );
};