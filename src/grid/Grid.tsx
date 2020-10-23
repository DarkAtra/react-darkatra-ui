import React, {Children, cloneElement, CSSProperties, HTMLAttributes, ReactElement} from 'react';
import {BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from '../utils/Breakpoint';
import {classes, isFixed, mapKeys, mapValues} from '../utils/Common';
import {GridHorizontalAlignContent, GridItemProps, GridVerticalAlignContent} from './grid-item/GridItem';
import styles from './Grid.module.scss';

export type GridProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactElement<GridItemProps> | Array<ReactElement<GridItemProps>>;
    inline?: BreakpointAwareValue<boolean>;
    dense?: BreakpointAwareValue<boolean>;
    gap?: BreakpointAwareValue<string>;
    columns?: BreakpointAwareValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | string>;
    hAlignContent?: BreakpointAwareValue<GridHorizontalAlignContent>;
    vAlignContent?: BreakpointAwareValue<GridVerticalAlignContent>;
};

const Grid = (props: GridProps) => {

    const {
        children,
        inline = false,
        dense = false,
        gap = null,
        columns = 1,
        hAlignContent = undefined,
        vAlignContent = undefined,
        className,
        style,
        ...rest
    } = props;

    const _className = classes(
        styles.grid,
        className
    );

    const _style = {
        ...style,
        ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(columns, 1), v => isFixed(v) ? `repeat(${v}, minmax(0, 1fr))` : v),
            key => withBreakpointSuffix('--grid-template-columns', key)),
        ...mapKeys(getValuePerBreakpointAndFillGaps(gap, '0'), key => withBreakpointSuffix('--grid-gap', key)),
        ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(dense, false), v => v ? 'dense' : 'row'),
            key => withBreakpointSuffix('--grid-dense', key)),
        ...mapKeys(mapValues(getValuePerBreakpointAndFillGaps(inline, false), v => v ? 'inline-grid' : 'grid'),
            key => withBreakpointSuffix('--grid-inline', key))
    } as CSSProperties;

    return (
        <div className={_className} style={_style} {...rest}>
            {Children.map(children, (child: ReactElement<GridItemProps>) => {
                return cloneElement(child, {
                    hAlignContent: hAlignContent,
                    vAlignContent: vAlignContent,
                    ...child.props
                });
            })}
        </div>
    );
};

export default Grid;
