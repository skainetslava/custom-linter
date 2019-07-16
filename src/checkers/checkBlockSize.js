import { errors, standart } from '../linter';
import { typeErrors } from '../typeErrors';
import { findContent, checkDifferentSize } from '../helpers/index';

export let isParent = false;

export function checkBlockBySize(parent) {
    const diff = parent === 'header' ? 2 : 0;
    const error = parent === 'header' ? typeErrors.headerTextSize : typeErrors.footerTextSize;

    return function (item) {
        if (item.elem !== parent && !isParent) {
            isParent = false;
            return;
        }

        isParent = true;

        if (item.block === 'text') {
            if (!item.mods || !item.mods.size) {
                return;
            }
            if (!checkDifferentSize(item.mods.size, standart, diff)) {
                errors.push(error)
            }
        }
        else if (item.content) {
            findContent(item.content, checkBlockBySize(parent));
        }

        isParent = false;
    }
}