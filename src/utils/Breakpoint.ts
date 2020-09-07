export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * An example for {@link BreakpointAwareValue}:
 *
 * const size: BreakpointAwareValue<number> = 1;
 *
 * <or>
 *
 * const size: BreakpointAwareValue<number> = {xs: 1, lg: 2}; // where the key is a {@link Breakpoint}
 */
export type BreakpointAwareValue<T> = T | { [key in Breakpoint]?: T };

/**
 * Gets the value or if value === null or undefined, this function returns the fallback value instead.
 *
 * @param _value the value
 * @param _fallback the fallback if value is null or undefined
 */
const getValueOrDefault = <T>(_value: T | null, _fallback: T) => {
    return _value === null || _value === undefined ? _fallback : _value;
};

/**
 * Gets the value for the given {@link Breakpoint}.
 *
 * @param breakpoint the {@link Breakpoint} to get the value for
 * @param value the {@link BreakpointAwareValue}
 */
export const getBreakpointAwareValue = <T>(breakpoint: Breakpoint, value: BreakpointAwareValue<T> | null) => {
    if (value === null) {
        return null;
    } else if (!(value instanceof Object)) {
        return breakpoint === 'xs' ? value as T : null;
    } else {
        return getValueOrDefault((value as { [key in Breakpoint]?: T })[breakpoint] as T, null);
    }
};

/**
 * Returns a map with each {@link Breakpoint} as key pointing to the {@link Breakpoint}'s value.
 *
 * @param value the {@link BreakpointAwareValue}
 */
export const getValuePerBreakpoint = <T>(value: BreakpointAwareValue<T> | null) => {
    return {
        xs: getBreakpointAwareValue('xs', value),
        sm: getBreakpointAwareValue('sm', value),
        md: getBreakpointAwareValue('md', value),
        lg: getBreakpointAwareValue('lg', value),
        xl: getBreakpointAwareValue('xl', value)
    } as { [key in Breakpoint]: T | null };
};

/**
 * Returns a map with each {@link Breakpoint} as key pointing to the {@link Breakpoint}'s value or if that value was null to the previous {@link Breakpoint}'s value.
 * If all {@link Breakpoint} values are null the fallback is used.
 *
 * @param value the {@link BreakpointAwareValue}
 * @param fallback the fallback value
 */
export const getValuePerBreakpointAndFillGaps = <T>(value: BreakpointAwareValue<T> | null, fallback: T) => {
    const _valueByBreakpoint = getValuePerBreakpoint(value);
    let prevValue = fallback;
    return {
        xs: prevValue = getValueOrDefault(getBreakpointAwareValue('xs', _valueByBreakpoint), prevValue),
        sm: prevValue = getValueOrDefault(getBreakpointAwareValue('sm', _valueByBreakpoint), prevValue),
        md: prevValue = getValueOrDefault(getBreakpointAwareValue('md', _valueByBreakpoint), prevValue),
        lg: prevValue = getValueOrDefault(getBreakpointAwareValue('lg', _valueByBreakpoint), prevValue),
        xl: getValueOrDefault(getBreakpointAwareValue('xl', _valueByBreakpoint), prevValue)
    } as { [key in Breakpoint]: T };
};

/**
 * Returns the given name with the {@link Breakpoint}'s as suffix.
 *
 * @param name the name to suffix
 * @param breakpoint the {@link Breakpoint}
 */
export const withBreakpointSuffix = (name: string, breakpoint: Breakpoint) => {
    return `${name}-${breakpoint}`;
};
