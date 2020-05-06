import React, {CSSProperties, HTMLAttributes} from 'react';
import styles from '../Grid.module.scss';
import {classes, mapKeys} from '../../utils/Common';
import {Breakpoint, BreakpointAwareValue, getValuePerBreakpointAndFillGaps, withBreakpointSuffix} from '../../utils/Breakpoint';

export type GridProps = HTMLAttributes<HTMLDivElement> & {
	spanColumns?: BreakpointAwareValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
	spanRows?: BreakpointAwareValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
    order?: BreakpointAwareValue<number>;
};

const GridItem = (props: GridProps) => {

	const {
		children,
		spanColumns = 1,
		spanRows = 1,
        order = 0,
		className,
		style,
		...rest
	} = props;

	const _className = classes(
		styles.gridItem,
		styles.gridRow,
		styles.gridColumn,
		styles.order,
		className
	);

	const _style = {
		...style,
		...mapKeys(getValuePerBreakpointAndFillGaps(spanColumns, 1), (key: Breakpoint) => withBreakpointSuffix('--grid-column', key)),
		...mapKeys(getValuePerBreakpointAndFillGaps(spanRows, 1), (key: Breakpoint) => withBreakpointSuffix('--grid-row', key)),
        ...mapKeys(getValuePerBreakpointAndFillGaps(order, 0), (key: Breakpoint) => withBreakpointSuffix('--order', key))
	} as CSSProperties;

	return (
		<div className={_className} style={_style} {...rest}>
			{children}
		</div>
	);
};

export default GridItem;
