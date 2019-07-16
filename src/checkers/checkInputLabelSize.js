import { errors, standart } from '../linter';
import { typeErrors } from '../typeErrors';

export function checkInputLabelSize(item) {
    if (item.mods) {
        if (item.mods.size !== standart) {
            errors.push(typeErrors.inputLabelSize)
        }
    }
    if (item.content) {
        checkInputLabelSize(item.content);
    }
}
