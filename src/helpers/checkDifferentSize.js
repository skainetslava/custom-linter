const types = ['s', 'l', 'xl', 'xxl'];

export function checkDifferentSize(size, standart, diff) {
    const indexSize = types.indexOf(size);
    const indexStandart = types.indexOf(standart);

    if (!diff) {
        return indexSize === indexStandart
    }

    return indexSize - indexStandart >= diff;
}