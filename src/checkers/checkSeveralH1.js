import { errors } from '../linter';
import { typeErrors } from '../typeErrors';
import { findContent } from '../helpers/index';

let isSeveralH1 = false;

export function checkSeveralH1(item) {
    if (item.block === 'text' && item.mods.type === 'h1') {
        if (isSeveralH1) {
            errors.push(typeErrors.severalH1);
            isSeveralH1 = false;
        } else {
            isSeveralH1 = true;
        }
    }
    else if (item.content) {
        findContent(item.content, checkSeveralH1);
    }
}
