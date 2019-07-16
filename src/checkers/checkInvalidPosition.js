import { errors } from '../linter';
import { typeErrors } from '../typeErrors';
import { findContent } from '../helpers/index';

let positionSizes = [];

function getHPositions(item) {
    if (item.block === 'text' && item.mods.type) {
        positionSizes.push(item.mods.type.slice(1))
    }
    else if (item.content) {
        findContent(item.content, getHPositions);
    }
}

export function checkInvalidPosition(item) {
    getHPositions(item);
    let sizeH;

    positionSizes.forEach((size, index) => {
        if (!positionSizes[index + 1]) {
            return;
        }
        if (+size > +positionSizes[index + 1]) {
            sizeH = size;
        }
    })

    if (sizeH) {
        errors.push(typeErrors[`invalidH${sizeH}Position`])
        positionSizes = [];
    }
}