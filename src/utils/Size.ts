export enum Size {
    SMALL = 'SMALL',
    NORMAL = 'NORMAL',
    LARGE = 'LARGE'
}

export const getSizeMultiplier: (size: Size) => number = (size) => {
    switch (size) {
        case Size.SMALL:
            return .75;
        case Size.NORMAL:
            return 1;
        case Size.LARGE:
            return 1.25;
    }
};
