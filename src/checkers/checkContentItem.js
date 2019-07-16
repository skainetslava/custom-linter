import { errors, standart } from '../linter';
import { typeErrors } from '../typeErrors';
import { findContent, checkDifferentSize } from '../helpers/index';


export function checkContentItem(item) {
    if (item.mix) {
        item.mix.forEach((mixItem) => {
            if (mixItem.mods["indent-b"]) {
                if (!checkDifferentSize(mixItem.mods["indent-b"], standart, 1)) {
                    errors.push(typeErrors.contentHorizontalSpace)
                }
            }
        })
    }
    else if (item.content) {
        findContent(item.content, checkContentItem);
    }
}