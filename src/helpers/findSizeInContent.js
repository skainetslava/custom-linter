import { setNewStandart } from './index';
import { standart } from '../linter'

export function findSizeInContent(block, action) {
    if (Array.isArray(block)) {
        block.forEach((item) => action(item));
        if (!standart) {
            standart = 'none';
            findSizeInContent(block, setNewStandart);
        }
    }
    else {
        findSizeInContent(block.content, setNewStandart);
    }
}