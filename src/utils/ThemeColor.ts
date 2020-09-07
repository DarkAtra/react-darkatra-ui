import {Breakpoint, withBreakpointSuffix} from './Breakpoint';
import {mapKeys, mapValues} from './Common';

export enum ThemeColor {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    INFO = 'INFO',
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    DANGER = 'DANGER',
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}

export type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
}

export const getThemeColorRgba: (themeColor: ThemeColor) => Color = (themeColor) => {
    switch (themeColor) {
        case ThemeColor.PRIMARY:
            return {r: 44, g: 123, b: 229, a: 1};
        case ThemeColor.SECONDARY:
            return {r: 110, g: 132, b: 163, a: 1};
        case ThemeColor.INFO:
            return {r: 57, g: 175, b: 209, a: 1};
        case ThemeColor.SUCCESS:
            return {r: 0, g: 217, b: 126, a: 1};
        case ThemeColor.WARNING:
            return {r: 246, g: 195, b: 67, a: 1};
        case ThemeColor.DANGER:
            return {r: 230, g: 55, b: 87, a: 1};
        case ThemeColor.LIGHT:
            return {r: 237, g: 242, b: 249, a: 1};
        case ThemeColor.DARK:
            return {r: 18, g: 38, b: 63, a: 1};
    }
};

export const getThemeColorRgbaStyles: (breakpointValues: { [key in Breakpoint]: ThemeColor }) => { [key: string]: Color } = (breakpointValues) => {
    return {
        ...mapKeys(mapValues(breakpointValues, v => getThemeColorRgba(v).r),
            key => withBreakpointSuffix('--theme-color-r', key)),
        ...mapKeys(mapValues(breakpointValues, v => getThemeColorRgba(v).g),
            key => withBreakpointSuffix('--theme-color-g', key)),
        ...mapKeys(mapValues(breakpointValues, v => getThemeColorRgba(v).b),
            key => withBreakpointSuffix('--theme-color-b', key)),
        ...mapKeys(mapValues(breakpointValues, v => getThemeColorRgba(v).a),
            key => withBreakpointSuffix('--theme-color-a', key))
    };
};
