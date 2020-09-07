import React, {CSSProperties, HTMLAttributes} from 'react';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from '../utils/Breakpoint';
import {classes, mapKeys, mapValues} from '../utils/Common';
import styles from './Flex.module.scss';

const alignItemsToCssValueMap: { [key in FlexAlignItems]: string } = {
    'start': 'flex-start',
    'center': 'center',
    'end': 'flex-end',
    'stretch': 'stretch',
    'normal': 'normal'
};

export type FlexAlignItems = 'normal' | 'start' | 'center' | 'end' | 'stretch';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type FlexProps = HTMLAttributes<HTMLDivElement> & {
    alignItems?: BreakpointAwareValue<FlexAlignItems>
    direction?: BreakpointAwareValue<FlexDirection>;
    inline?: BreakpointAwareValue<boolean>;
    gap?: BreakpointAwareValue<string>;
    wrap?: BreakpointAwareValue<boolean>;
};

const Flex = (props: FlexProps) => {

    const {
        children,
        alignItems = 'normal',
        direction = 'row',
        inline = false,
        gap = null,
        wrap = false,
        className,
        style,
        ...rest
    } = props;

    const _className = classes(
        styles.flex,
        className
    );

    const _style = {
        ...style,
        ...mapKeys(mapValues<FlexAlignItems, string>(getValuePerBreakpointAndFillGaps<FlexAlignItems>(alignItems, 'normal'),
            v => alignItemsToCssValueMap[v]), key => withBreakpointSuffix('--flex-align-items', key)),
        ...mapKeys(getValuePerBreakpointAndFillGaps(gap, '0'), key => withBreakpointSuffix('--flex-gap', key)),
        ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(inline, false), v => v ? 'inline-flex' : 'flex'),
            key => withBreakpointSuffix('--flex-inline', key)),
        ...mapKeys(getValuePerBreakpointAndFillGaps(direction, 'row'), key => withBreakpointSuffix('--flex-direction', key)),
        ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(wrap, false), v => v ? 'wrap' : 'nowrap'),
            key => withBreakpointSuffix('--flex-wrap', key))
    } as CSSProperties;

    return (
        <div className={_className} style={_style} {...rest}>
            {children}
        </div>
    );
};

export default Flex;
