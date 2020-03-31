const _spacer = 1;
const _spacers = {
    0: 0,
    1: _spacer * .25,
    2: _spacer * .5,
    3: _spacer,
    4: _spacer * 1.5,
    5: _spacer * 3
};
const _spacerUnit = 'rem';
export type Spacer = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Gets the {@link Spacer}'s value with unit.
 *
 * @param spacer the {@link Spacer}
 */
export const getSpacerValue = (spacer: Spacer | null) => {
    return spacer === null ? null : _spacers[spacer] + _spacerUnit;
};
