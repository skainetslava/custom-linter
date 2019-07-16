import { errors, standart } from '../linter';
import { typeErrors } from '../typeErrors';
import { findContent, checkDifferentSize } from '../helpers/index';

export function checkHorizontalSpace(parent) {
    const error = parent === 'header' ? typeErrors.headerHorizontalSpace : typeErrors.footerHorizontalSpace;

    return function (item) {
        if (item.elem === parent) {
            item.mix && item.mix.map((mixItem) => {
                if (mixItem.mods["space-h"]) {
                    if (!checkDifferentSize(mixItem.mods['space-h'], standart, 1)) {
                        errors.push(error)
                    }
                }
            })
        }
        else if (item.content) {
            findContent(item.content, checkHorizontalSpace(parent));
        }
    }
}