import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from '../utils/Breakpoint';
import {classes, mapKeys, mapValues, Modify} from '../utils/Common';
import {getSizeMultiplier, Size} from '../utils/Size';
import {getThemeColorRgbaStyles, ThemeColor} from '../utils/ThemeColor';
import styles from './Button.module.scss';

export type ButtonProps = Modify<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, {
    themeColor?: BreakpointAwareValue<ThemeColor>;
    outline?: BreakpointAwareValue<boolean>;
    size?: BreakpointAwareValue<Size>;
    prefix?: ReactNode;
    suffix?: ReactNode;
}>;

const Button = (props: ButtonProps) => {

    const {
        children,
        prefix,
        suffix,
        href,
        themeColor = ThemeColor.PRIMARY,
        outline = false,
        size = Size.NORMAL,
        disabled,
        className,
        style,
        ...rest
    } = props;

    const _className = classes(
        styles.button,
        disabled ? 'disabled' : null,
        className
    );

    const breakpointValues = getValuePerBreakpointAndFillGaps(themeColor, ThemeColor.PRIMARY);
    const _style = {
        ...style,
        ...getThemeColorRgbaStyles(breakpointValues),
        ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(size, Size.NORMAL), v => getSizeMultiplier(v)),
                key => withBreakpointSuffix('--size', key))
    } as CSSProperties;

    const _children = <>
        {prefix ? (
            <div className={styles.prefix}>{prefix}</div>
        ) : null}
        <div className={styles.content}>{children}</div>
        {suffix ? (
            <div className={styles.suffix}>{suffix}</div>
        ) : null}
    </>;

    return href ? (
        disabled ? (
            <span className={_className} style={_style} {...rest}>
                {_children}
            </span>
        ) : (
            <Link className={_className} style={_style} to={href} {...rest}>
                {_children}
            </Link>
        )
    ) : (
        <button className={_className} style={_style} disabled={disabled} {...rest}>
            {_children}
        </button>
    );
};

export default Button;
