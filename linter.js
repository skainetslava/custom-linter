//import { typeErrors } from './src/typeErrors';
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
    //         { "block": "input", "mods": { "size": "l" } },
    //         // неправильно
    //         { "block": "input", "mods": { "size": "s" } }
    //     ]
    // },
    // {
    //     "block": "form",
    //     "content": [{
    //         "block": "form",
    //         "elem": "content",
    //         "content": { "block": "input", "mods": { "size": "l" } },
    //         // правильно
    //         //"mix": [{ "block": "form", "elem": "item", "mods": { "space-v": "xxl" } }]
    //         // неправильно
    //         "mix": [{ "block": "form", "elem": "item", "mods": { "space-v": "xl" } }]
    //     },
    //     ]
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
    //             "mix": [{ "block": "form", "elem": "item", "mods": { "space-v": "s" } }]
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
    //         {
    //             "block": "form",
    //             "elem": "header",
    //             "mix": [{ "block": "form", "elem": "item", "mods": { "space-h": "s" } }]
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
    //                 {
    //                     "block": "text",
    //                     "mods": {
    //                         "size": "xxl"
    //                     }
    //                  }
    //             ]
    //         }
    //     ]
    // },
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
// const stringTest = JSON.stringify(testExamples, null, '\t');
// console.log(stringTest);
// for (var i = 0; i <= stringTest.length; i++) {
//     if(stringTest[i] === '\n') {
//         console.log(stringTest[i]);
//     }
//   }


const typeErrors = {
    inputLabelSize: {
        code: 'FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL',
        error: 'Подписи и поля в форме должны быть одного размера'
    },
    contentVerticalSpace: {
        code: 'FORM.CONTENT_VERTICAL_SPACE_IS_INVALID',
        error: 'Вертикальный внутренний отступ контентного элемента формы content со значением модификатора space-v на 2 шага больше эталонного размера '
    },
    contentHorizontalSpace: {
        code: 'FORM.CONTENT_HORIZONTAL_SPACE_IS_INVALID',
        error: 'Горизонтальный внутренний отступ контентного элемента модификатора space-h элемента формы item на 1 шаг больше эталонного размера '
    },
    contentItemIndent: {
        code: 'FORM.CONTENT_ITEM_INDENT_IS_INVALID',
        error: 'Строки формы модификатора indent-b элемента формы item на 1 шаг больше эталонного размера'
    },
    headerTextSize: {
        code: 'FORM.HEADER_TEXT_SIZE_IS_INVALID',
        error: 'Все текстовые блоки в заголовке формы (элемент header) должны быть со значением модификатора size на 2 шага больше эталонного размера'
    },
    headerVerticalSpace: {
        code: 'FORM.HEADER_VERTICAL_SPACE_IS_INVALID',
        error: 'Вертикальный внутренний отступ заголовка формы item со значением модификатора space-v, равным эталонному размеру.'
    },
    headerHorizontalSpace: {
        code: 'FORM.HEADER_HORIZONTAL_SPACE_IS_INVALID',
        error: 'Горизонтальный внутренний отступ должен быть на 1 шаг больше эталонного размера.'
    },
    footerVerticalSpace: {
        code: 'FORM.FOOTER_VERTICAL_SPACE_IS_INVALID',
        error: 'Вертикальный внутренний отступ формы должен быть задан с помощью микса на него элемента формы item со значением модификатора space-v, равным эталонному размеру.'
    },
    footerHorizontalSpace: {
        code: 'FORM.FOOTER_HORIZONTAL_SPACE_IS_INVALID',
        error: 'Горизонтальный внутренний отступ должен быть на 1 шаг больше эталонного размера.'
    },
    footerTextSize: {
        code: 'FORM.FOOTER_TEXT_SIZE_IS_INVALID',
        error: 'Размер текстовых блоков в подвале должен соответствовать эталонному.'
    },
    severalH1: {
        code: 'FORM.SEVERAL_H1',
        error: 'Заголовок первого уровня (блок text с модификатором type h1) должен быть один на странице.'
    },
    invalidH2Position: {
        code: 'FORM.INVALID_H2_POSITION',
        error: 'Заголовок второго уровня (блок text с модификатором type h2) не может следовать перед заголовком первого'
    },
    invalidH3Position: {
        code: 'FORM.INVALID_H3_POSITION',
        error: 'Заголовок третьего уровня (блок text с модификатором type h3) не может следовать перед заголовком второго'
    }
};

let standart;
let errors = [];

const types = ['s', 'l', 'xl', 'xxl'];

function checkDifferentSize(size, standart, diff) {
    const indexSize = types.indexOf(size);
    const indexStandart = types.indexOf(standart);

    if (!diff) {
        return indexSize === indexStandart
    }

    return indexSize - indexStandart >= diff;
}

function checkInputLabelSize(item) {
    if (item.mods) {
        if (item.mods.size !== standart) {
            errors.push(typeErrors.inputLabelSize)
        }
    }
    if (item.content) {
        checkInputLabelSize(item.content);
    }
}

function checkContentVertical(item) {
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

function checkContentItem(item) {
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

function checkVerticalSpace(parent) {
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

function checkHorizontalSpace(parent) {
    const error = parent === 'header' ? typeErrors.headerHorizontalSpace : typeErrors.footerHorizontalSpace;

    return function (item) {
        if (item.elem === parent) {
            item.mix && item.mix.map((mixItem) => {
                if (mixItem.mods["space-h"]) {
                    if (!checkDifferentSize(mixItem.mods['space-h'], standart, 1)) {
                        errors.push(error)
                    }
                }
            })
        }
        else if (item.content) {
            findContent(item.content, checkHorizontalSpace(parent));
        }
    }
}


let isSeveralH1 = false;
function checkSeveralH1(item) {
    if (item.block === 'text' && item.mods.type === 'h1') {
        if (isSeveralH1) {
            errors.push(typeErrors.severalH1)
        } else {
            isSeveralH1 = true;
        }
    }
    else if (item.content) {
        findContent(item.content, checkSeveralH1);
    }
}

const positionSizes = [];

function getHPositions(item) {
    if (item.block === 'text' && item.mods.type) {
        positionSizes.push(item.mods.type.slice(1))
    }
    else if (item.content) {
        findContent(item.content, getHPositions);
    }
}

function checkInvalidPosition(item) {
    getHPositions(item);
    let sizeH;

    positionSizes.forEach((size, index) => {
        if (!positionSizes[index + 1]) {
            return;
        }
        if (+size > +positionSizes[index + 1]) {
            sizeH = size;
        }
    })

    if (sizeH) {
        errors.push(typeErrors['invalidH${sizeH}Position'])
    }
}

const actions = [
    checkInputLabelSize,
    checkContentVertical,
    checkContentItem,
    checkBlockBySize('header'),
    checkBlockBySize('footer'),
    checkSeveralH1,
    checkInvalidPosition,
    checkVerticalSpace('header'),
    checkVerticalSpace('footer'),
    checkHorizontalSpace('footer'),
    checkHorizontalSpace('header')
];

function setNewStandart(block) {
    if (block.mods) {
        if (!standart) {
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
        if (!standart) {
            standart = 'none';
            findSizeInContent(block, setNewStandart);
        }
    }
    else {
        findSizeInContent(block.content, setNewStandart);
    }
}


let isParent = false;
function checkBlockBySize(parent) {
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
        isParent = false;
        if (block.content) {
            findContent(block.content, action);
        }
    })
}

testExamples.forEach((ex) => {
    checkCodeByLinter(ex, actions);
})

console.log(errors);