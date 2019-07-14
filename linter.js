//FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL

const testExamples = [
    // {
    //     "block": "form",
    //     "content": [
    //         {
    //             "block": "form",
    //             "elem": "label",
    //             "content": {
    //                 "block": "text",
    //                 "mods": { "size": "l" }
    //             }
    //         },
    //         // правильно
    //         { "block": "input", "mods": { "size": "l" } }
    //         // неправильно
    //         //{ "block": "input", "mods": { "size": "s" } }
    //     ]
    // },
    // // {
    // //     "block": "form",
    //     "content": [{
    //         "block": "form",
    //         "elem": "content",
    //         "content": { "block": "input", "mods": { "size": "l" } },
    //         // правильно
    //         //"mix": [{ "block": "form", "elem": "item", "mods": { "space-v": "xxl" } }]
    //         // неправильно
    //         "mix": [{ "block": "form", "elem": "item", "mods": { "space-v": "xl" } }]
    //     },
    //     { "block": "input", "mods": { "size": "xl" } }]
    // },
    // {
    //     "block": "form",
    //     "content": {
    //         "block": "form",
    //         "elem": "content",
    //         "content": [
    //             // правильно
    //             {
    //                 "block": "form",
    //                 "elem": "content-item",
    //                 "mix": [{ "block": "form", "elem": "item", "mods": { "indent-b": "xl" } }],
    //                 "content": { "block": "input", "mods": { "size": "l" } }
    //             },
    //             // неправильно
    //             {
    //                 "block": "form",
    //                 "elem": "content-item",
    //                 "mix": [{ "block": "form", "elem": "item", "mods": { "indent-b": "l" } }],
    //                 "content": { "block": "input", "mods": { "size": "l" } }
    //             },
    //             {
    //                 "block": "form",
    //                 "elem": "content-item",
    //                 "content": { "block": "input", "mods": { "size": "l" } }
    //             }
    //         ]
    //     }
    // },
    // {
    //     "block": "form",
    //     "content": [
    //         {
    //             "block": "form",
    //             "elem": "header",
    //             "content": [
    //                 // правильно
    //                 {
    //                     "block": "text",
    //                     "mods": {
    //                         "size": "xxl"
    //                     }
    //                 },
    //                 // неправильно
    //                 // {
    //                 //     "block": "text",
    //                 //     "mods": {
    //                 //         "size": "xl"
    //                 //     }
    //                 // }
    //             ]
    //         },
    //         {
    //             "block": "input",
    //             "mods": {
    //                 "size": "l"
    //             }
    //         }
    //     ]
    // },
    // {
    //     "block": "form",
    //     "content": [
    //         // правильно
    //         {
    //             "block": "form",
    //             "elem": "header",
    //             "mix": [{ "block": "form", "elem": "item", "mods": { "space-v": "l" } }]
    //         },
    //         // неправильно
    //         {
    //             "block": "form",
    //             "elem": "header",
    //             "mix": [ { "block": "form", "elem": "item", "mods": { "space-v": "s" } } ]
    //         },
    //         {
    //             "block": "input",
    //             "mods": {
    //                 "size": "l"
    //             }
    //         }
    //     ]
    // },
    // {
    //     "block": "form",
    //     "content": [
    //         // правильно
    //         {
    //             "block": "form",
    //             "elem": "header",
    //             "mix": [{ "block": "form", "elem": "item", "mods": { "space-h": "xl" } }]
    //         },
    //         // неправильно
    //         // {
    //         //     "block": "form",
    //         //     "elem": "header",
    //         //     "mix": [{ "block": "form", "elem": "item", "mods": { "space-h": "s" } }]
    //         // },
    //         {
    //             "block": "input",
    //             "mods": {
    //                 "size": "l"
    //             }
    //         }
    //     ]
    // },
    // {
    //     "block": "form",
    //     "content": [
    //         {
    //             "block": "input",
    //             "mods": {
    //                 "size": "l"
    //             }
    //         },
    //         {
    //             "block": "form",
    //             "elem": "footer",
    //             "content": [
    //                 // правильно
    //                 {
    //                     "block": "text",
    //                     "mods": {
    //                         "size": "l"
    //                     }
    //                 },
    //                 // // неправильно
    //                 // {
    //                 //     "block": "text",
    //                 //     "mods": {
    //                 //         "size": "xxl"
    //                 //     }
    //                 // }
    //             ]
    //         }
    //     ]
    // }
    {
        "block": "form",
        "content": [
            {
                "block": "input",
                "mods": {
                    "size": "l"
                }
            },
            {
                "block": "form",
                "elem": "footer",
                "content": [
                    // правильно

                    {
                        "block": "text",
                        "mods": { "type": "h1" }
                    },

                    // неправильно
                    {
                        "block": "text",
                        "mods": { "type": "h2" }
                    }

                ]
            }
        ]
    }
];


let standart;
let errors = [];


const types = ['s', 'l', 'xl', 'xxl'];

function checkInputLabelSize(item) {
    const keys = Object.keys(item);
    if (keys.includes('mods')) {
        if (item.mods.size !== standart) {
            errors.push({ error: 'FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL' })
        }
    }
    if (keys.includes('content')) {
        checkInputLabelSize(item.content);
    }
}

function checkDifferentSize(size, standart, diff) {
    const indexSize = types.indexOf(size);
    const indexStandart = types.indexOf(standart);

    return indexSize - indexStandart >= diff;
}

function checkContentVertical(item) {
    const keys = Object.keys(item);
    if (item.elem === 'content') {
        if (keys.includes('mix')) {
            item.mix.map((mixItem) => {
                if (mixItem.mods["space-v"]) {
                    if (!checkDifferentSize(mixItem.mods["space-v"], standart, 2)) {
                        errors.push({ error: 'FORM.CONTENT_VERTICAL_SPACE_IS_INVALID' })
                    }
                }
            })
        }
        if (keys.includes('content')) {
            checkContentVertical(item.content);
        }
    }
}

function checkContentItem(item) {
    const keys = Object.keys(item);
    if (keys.includes('mix')) {
        item.mix.map((mixItem) => {
            if (mixItem.mods["indent-b"]) {
                if (!checkDifferentSize(mixItem.mods["indent-b"], standart, 1)) {
                    errors.push({ error: 'FORM.CONTENT_ITEM_INDENT_IS_INVALID' })
                }
            }
        })
    }
    else if (keys.includes('content')) {
        findContent(item.content, checkContentItem);
    }
}

let isParentHeader = false;
function checkHeaderSize(item) {
    const keys = Object.keys(item);
    if (item.elem !== "header" && !isParentHeader) {
        isParentHeader = false;
        return;
    }
    isParentHeader = true;

    if (item.block === 'text') {
        if (keys.includes('mods')) {

            if (!checkDifferentSize(item.mods.size, standart, 2)) {
                errors.push({ error: 'FORM.HEADER_TEXT_SIZE_IS_INVALID' })
            }
        }
    }
    else if (keys.includes('content')) {
        findContent(item.content, checkHeaderSize);
    }
}

function checkHeaderVerticalSpace(item) {
    const keys = Object.keys(item);
    if (item.elem === 'header') {
        item.mix.map((mixItem) => {
            if (mixItem.elem === 'item' && mixItem.mods["space-v"]) {
                if (mixItem.mods["space-v"] !== standart) {
                    errors.push({ error: 'FORM.HEADER_VERTICAL_SPACE_IS_INVALID' })
                }
            }
        })
    }
    else if (keys.includes('content')) {
        findContent(item.content, checkContentItem);
    }
}

function checkHeaderHorizontalSpace(item) {
    const keys = Object.keys(item);
    if (item.elem === 'header') {
        if (keys.includes('mix')) {
            item.mix.map((mixItem) => {
                if (mixItem.mods["space-h"]) {
                    if (!checkDifferentSize(mixItem.mods['space-h'], standart, 1)) {
                        errors.push({ error: 'FORM.HEADER_HORIZONTAL_SPACE_IS_INVALID' })
                    }
                }
            })
        }
    }
    else if (keys.includes('content')) {
        findContent(item.content, checkHeaderHorizontalSpace);
    }
}

function checkFooterVerticalSpace(item) {
    const keys = Object.keys(item);
    if (item.elem === 'footer') {
        item.mix && item.mix.map((mixItem) => {
            if (mixItem.elem === 'item' && mixItem.mods["space-v"]) {
                if (mixItem.mods["space-v"] !== standart) {
                    errors.push({ error: 'FORM.FOOTER_VERTICAL_SPACE_IS_INVALID' })
                }
            }
        })
    }
    else if (keys.includes('content')) {
        findContent(item.content, checkContentItem);
    }
}

function checkFooterHorizontalSpace(item) {
    const keys = Object.keys(item);
    if (item.elem === 'footer') {
        if (keys.includes('mix')) {
            item.mix.map((mixItem) => {
                if (mixItem.mods["space-h"]) {
                    if (!checkDifferentSize(mixItem.mods['space-h'], standart, 1)) {
                        errors.push({ error: 'FORM.FOOTER_HORIZONTAL_SPACE_IS_INVALID' })
                    }
                }
            })
        }
    }
    else if (keys.includes('content')) {
        findContent(item.content, checkHeaderHorizontalSpace);
    }
}

let isParentFooter = false;
function checkFooterTextSize(item) {
    const keys = Object.keys(item);
    if (item.elem !== "footer" && !isParentFooter) {
        isParentFooter = false;
        return;
    }
    isParentFooter = true;

    if (item.block === 'text') {
        if (keys.includes('mods')) {
            if (item.mods.size && item.mods.size !== standart) {
                errors.push({ error: 'FORM.FOOTER_TEXT_SIZE_IS_INVALID' })
            }
        }
    }
    else if (keys.includes('content')) {
        findContent(item.content, checkFooterTextSize);
    }
}


let isSeveralH1 = false;
function checkSeveralH1(item) {
    const keys = Object.keys(item);
    if (item.block === 'text' && item.mods.type === 'h1') {
        if (isSeveralH1) {
            errors.push({ error: 'TEXT.SEVERAL_H1' })
        } else {
            isSeveralH1 = true;
        }
    }
    else if (keys.includes('content')) {
        findContent(item.content, checkSeveralH1);
    }
}

const positionSizes = [];

function getHPosition(item) {
    const keys = Object.keys(item);
    console.log(item)
    if (item.block === 'text' && item.mods.type) {
        positionSizes.push(item.mods.type.slice(1))
    }
    else if (keys.includes('content')) {
        findContent(item.content, getHPosition);
    }
}

function checkInvalidPosition(item) {
    getHPosition(item);
    console.log(positionSizes);
    let sizeH;
    positionSizes.forEach((size, index) => {
        if(!positionSizes[index + 1]) {
            return;
        }
        if(+size > +positionSizes[index + 1]) {
            sizeH = +size;
        }
    })

    if(sizeH) {
        errors.push({ error: `TEXT.INVALID_H${sizeH}_POSITION` })
    }
}
////////
const actions = [
    checkInputLabelSize,
    checkContentVertical,
    checkContentItem,
    checkHeaderSize,
    checkHeaderVerticalSpace,
    checkHeaderHorizontalSpace,
    checkFooterVerticalSpace,
    checkFooterHorizontalSpace,

    checkFooterTextSize,
    checkSeveralH1,
    checkInvalidPosition
];

function setNewStandart(block) {
    const keys = Object.keys(block);
    if (keys.includes('mods')) {
        if (!standart) {
            standart = block.mods.size;
        }
    }
    if (keys.includes('content')) {
        findStandart(block.content);
    }
}

function findStandart(block) {
    if (block.length) {
        block.forEach(item => {
            setNewStandart(item);
        })
    } else {
        setNewStandart(block);
    }
}

function findContent(block, action) {
    if (block.length) {
        block.map((item) => {
            action(item);
        })
    }
    else {
        action(block);
    }
}

function checkCodeByLinter(block, actions) {
    findStandart(block);
    console.log(standart);
    actions.forEach((action) => {
        for (key in block) {
            if (key === 'content') {

                findContent(block[key], action);
            }
        }
    })
}

testExamples.forEach((ex) => {
    checkCodeByLinter(ex, actions);
})

console.log(errors);