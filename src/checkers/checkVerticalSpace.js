import { errors, standart } from '../linter';
import { typeErrors } from '../typeErrors';
import { findContent } from '../helpers/index';

export function checkVerticalSpace(parent) {
    const error = parent === 'header' ? typeErrors.headerVerticalSpace : typeErrors.footerVerticalSpace;

    return function (item) {
        if (item.elem === parent) {
            item.mix && item.mix.map((mixItem) => {
                if (mixItem.elem === 'item' && mixItem.mods["space-v"]) {
                    if (mixItem.mods["space-v"] !== standart) {
                        errors.push(error)
                    }
                }
            })
        }
        else if (item.content) {
            findContent(item.content, checkVerticalSpace(parent));
        }
    }
}