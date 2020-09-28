import React, {AnchorHTMLAttributes, CSSProperties, HTMLAttributes, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import Flex from '../flex/Flex';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from '../utils/Breakpoint';
import {classes, mapKeys, mapValues} from '../utils/Common';
import {getThemeColorRgbaStyles, ThemeColor} from '../utils/ThemeColor';
import styles from './Badge.module.scss';

export type BadgeProps = Omit<HTMLAttributes<HTMLDivElement>, 'prefix'> & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> & {
    themeColor?: BreakpointAwareValue<ThemeColor>;
    pill?: BreakpointAwareValue<boolean>;
    prefix?: ReactNode;
    suffix?: ReactNode;
};

const Badge = (props: BadgeProps) => {

    const {
        children,
        themeColor = ThemeColor.PRIMARY,
        pill = false,
        prefix,
        suffix,
        href,
        className,
        style,
        ...rest
    } = props;

    const _className = classes(
        styles.badge,
        className
    );

    const breakpointValues = getValuePerBreakpointAndFillGaps(themeColor, ThemeColor.PRIMARY);
    const _style = {
        ...style,
        ...getThemeColorRgbaStyles(breakpointValues),
        ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(pill, false), v => v ? 1 : 0),
            key => withBreakpointSuffix('--pill', key))
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

    return (
        <Flex component={href ? ((p) => <Link to={href} {...p}>{p.children}</Link>) : undefined}
              alignItems={'center'} gap={'.25em'} className={_className} style={_style} {...rest}>
            {_children}
        </Flex>
    );
};

export default Badge;
