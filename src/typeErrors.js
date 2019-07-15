export const typeErrors = {
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
        error: 'Вертикальный внутренний отступ заголовка формы должен быть задан с помощью микса на него элемента формы item со значением модификатора space-v, равным эталонному размеру.'
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
        code: 'FORM.SEVERAL_H1',
        error: 'Размер текстовых блоков в подвале должен соответствовать эталонному.'
    },
    severalH1: {
        code: 'FORM.FOOTER_TEXT_SIZE_IS_INVALID',
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