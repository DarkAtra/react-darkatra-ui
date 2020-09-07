import React, {CSSProperties, HTMLAttributes} from 'react';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps} from '../utils/Breakpoint';
import {classes} from '../utils/Common';
import {getThemeColorRgbaStyles, ThemeColor} from '../utils/ThemeColor';
import styles from './Spinner.module.scss';

export type SpinnerProps = Omit<Omit<Omit<HTMLAttributes<SVGElement>, 'children'>, 'viewBox'>, 'xmlns'> & {
    themeColor?: BreakpointAwareValue<ThemeColor>;
};

const Spinner = (props: SpinnerProps) => {

    const {
        themeColor = ThemeColor.PRIMARY,
        className,
        style,
        ...rest
    } = props;

    const _className = classes(
        styles.spinner,
        className
    );

    const breakpointValues = getValuePerBreakpointAndFillGaps(themeColor, ThemeColor.PRIMARY);
    const _style = {
        ...style,
        ...getThemeColorRgbaStyles(breakpointValues)
    } as CSSProperties;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={_className} style={_style} {...rest}>
            <circle fill="none" strokeWidth="6" strokeLinecap="round" cx="50" cy="50" r="47"/>
        </svg>
    );
};

export default Spinner;
