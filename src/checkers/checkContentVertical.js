import { errors, standart } from '../linter';
import { typeErrors } from '../typeErrors';
import { checkDifferentSize } from '../helpers/checkDifferentSize';

export function checkContentVertical(item) {
    if (item.elem === 'content') {
        if (item.mix) {
            item.mix.forEach((mixItem) => {
                if (mixItem.mods["space-v"]) {
                    return;
                }
                if (!checkDifferentSize(mixItem.mods["space-v"], standart, 2)) {
                    errors.push(typeErrors.contentVerticalSpace)
                }
            })
        }
        else if (item.content) {
            checkContentVertical(item.content);
        }
    }
}