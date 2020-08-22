import React, {CSSProperties, HTMLAttributes, ReactNode} from 'react';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps} from '../utils/Breakpoint';
import {classes, Modify} from '../utils/Common';
import {getThemeColorRgbaStyles, ThemeColor} from '../utils/ThemeColor';
import styles from './Alert.module.scss';

export type AlertProps = Modify<HTMLAttributes<HTMLDivElement>, {
    themeColor?: BreakpointAwareValue<ThemeColor>;
    prefix?: ReactNode;
    suffix?: ReactNode;
}>;

const Alert = (props: AlertProps) => {

    const {
        children,
        themeColor = ThemeColor.PRIMARY,
        prefix,
        suffix,
        className,
        style,
        ...rest
    } = props;

    const _className = classes(
        styles.alert,
        className
    );

    const breakpointValues = getValuePerBreakpointAndFillGaps(themeColor, ThemeColor.PRIMARY);
    const _style = {
        ...style,
        ...getThemeColorRgbaStyles(breakpointValues)
    } as CSSProperties;

    return (
        <div className={_className} style={_style} {...rest}>
            {prefix ? (
                <div className={styles.prefix}>{prefix}</div>
            ) : null}
            <div className={styles.content}>{children}</div>
            {suffix ? (
                <div className={styles.suffix}>{suffix}</div>
            ) : null}
        </div>
    );
};

export default Alert;
