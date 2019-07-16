export function findContent(block, action) {
    if (Array.isArray(block)) {
        block.forEach((item) => action(item));
    }
    else {
        action(block);
    }
}