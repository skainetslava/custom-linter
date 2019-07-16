import { findSizeInContent } from './index';
import { standart } from '../linter'

export function setNewStandart(block) {
    if (block.mods) {
        console.log(standart)
        if (!standart) {
            standart = block.mods.size;
        }
    }
    else if (block.content && standart === 'none') {
        findSizeInContent(block.content, setNewStandart);
    }
}
