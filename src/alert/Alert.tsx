import React, {CSSProperties, HTMLAttributes, ReactNode} from 'react';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from '../utils/Breakpoint';
import {classes, mapKeys, mapValues, Modify} from '../utils/Common';
import {getThemeColorRgba, ThemeColor} from '../utils/ThemeColor';
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
        ...mapKeys(mapValues(breakpointValues, v => getThemeColorRgba(v).r),
            key => withBreakpointSuffix('--theme-color-r', key)),
        ...mapKeys(mapValues(breakpointValues, v => getThemeColorRgba(v).g),
            key => withBreakpointSuffix('--theme-color-g', key)),
        ...mapKeys(mapValues(breakpointValues, v => getThemeColorRgba(v).b),
            key => withBreakpointSuffix('--theme-color-b', key)),
        ...mapKeys(mapValues(breakpointValues, v => getThemeColorRgba(v).a),
            key => withBreakpointSuffix('--theme-color-a', key))
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
