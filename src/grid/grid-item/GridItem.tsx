import React, {CSSProperties, HTMLAttributes} from 'react';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from '../../utils/Breakpoint';
import {classes, mapKeys, mapValues} from '../../utils/Common';
import styles from '../Grid.module.scss';

type HorizontalAlignContentValue = 'normal' | 'left' | 'center' | 'right' | 'stretch';
type VerticalAlignContentValue = 'normal' | 'top' | 'center' | 'bottom' | 'space-between' | 'space-around';

const horizontalAlignContentToCssValueMap: { [key in HorizontalAlignContentValue]: string } = {
    'left': 'flex-start',
    'center': 'center',
    'right': 'flex-end',
    'stretch': 'stretch',
    'normal': 'normal'
};
const verticalAlignContentToCssValueMap: { [key in VerticalAlignContentValue]: string } = {
    'top': 'flex-start',
    'center': 'center',
    'bottom': 'flex-end',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'normal': 'normal'
};

export type GridProps = HTMLAttributes<HTMLDivElement> & {
    spanColumns?: BreakpointAwareValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
    spanRows?: BreakpointAwareValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
    order?: BreakpointAwareValue<number>;
    hAlignContent?: BreakpointAwareValue<HorizontalAlignContentValue>;
    vAlignContent?: BreakpointAwareValue<VerticalAlignContentValue>;
};

const GridItem = (props: GridProps) => {

    const {
        children,
        spanColumns = 1,
        spanRows = 1,
        order = 0,
        hAlignContent = 'normal',
        vAlignContent = 'normal',
        className,
        style,
        ...rest
    } = props;

    const _className = classes(
        styles.gridItem,
        styles.gridRow,
        styles.gridColumn,
        styles.gridOrder,
        styles.gridHorizontalAlignment,
        styles.gridVerticalAlignment,
        className
    );

    const _style = {
        ...style,
        ...mapKeys(getValuePerBreakpointAndFillGaps(spanColumns, 1), key => withBreakpointSuffix('--grid-column', key)),
        ...mapKeys(getValuePerBreakpointAndFillGaps(spanRows, 1), key => withBreakpointSuffix('--grid-row', key)),
        ...mapKeys(getValuePerBreakpointAndFillGaps(order, 0), key => withBreakpointSuffix('--grid-order', key)),
        ...mapKeys(mapValues<HorizontalAlignContentValue, string>(getValuePerBreakpointAndFillGaps<HorizontalAlignContentValue>(hAlignContent, 'normal'),
            v => horizontalAlignContentToCssValueMap[v]), key => withBreakpointSuffix('--grid-horizontal-alignment', key)),
        ...mapKeys(mapValues<VerticalAlignContentValue, string>(getValuePerBreakpointAndFillGaps<VerticalAlignContentValue>(vAlignContent, 'normal'),
            v => verticalAlignContentToCssValueMap[v]), key => withBreakpointSuffix('--grid-vertical-alignment', key))
    } as CSSProperties;

    return (
        <div className={_className} style={_style} {...rest}>
            {children}
        </div>
    );
};

export default GridItem;
