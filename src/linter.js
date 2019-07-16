import { testExamples } from './tests';
import {
    checkBlockBySize,
    checkContentItem,
    checkContentVertical,
    checkHorizontalSpace,
    checkInputLabelSize,
    checkInvalidPosition,
    checkSeveralH1,
    checkVerticalSpace
} from './checkers/index';

export let standart;
export let errors = [];

const actions = [
    checkInputLabelSize,
    checkContentVertical,
    checkContentItem,
    checkSeveralH1,
    checkInvalidPosition,
    checkBlockBySize('header'),
    checkBlockBySize('footer'),
    checkVerticalSpace('header'),
    checkVerticalSpace('footer'),
    checkHorizontalSpace('footer'),
    checkHorizontalSpace('header')
];

function setNewStandart(block) {
    if (block.mods) {
        if (!standart) {
            console.log(standart)
            standart = block.mods.size;
        }
    }
    else if (block.content && standart === 'none') {
        findSizeInContent(block.content, setNewStandart);
    };
}

function findSizeInContent(block, action) {
    if (Array.isArray(block)) {
        block.forEach((item) => action(item));
        console.log(standart);
        if (!standart) {
            console.log(errors);
            standart = 'none';
            findSizeInContent(block, setNewStandart);
        }
    }
    else {
        findSizeInContent(block.content, setNewStandart);
    }
}


function findContent(block, action) {
    if (Array.isArray(block)) {
        block.forEach((item) => action(item));
    }
    else {
        action(block);
    }
}

function checkCodeByLinter(block, actions) {
    findSizeInContent(block, setNewStandart);
    actions.forEach((action) => {
        if (block.content) {
            findContent(block.content, action);
        }
    })
}

testExamples.forEach((ex) => {
    checkCodeByLinter(ex, actions);
})

console.log(errors);