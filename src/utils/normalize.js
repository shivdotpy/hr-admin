export const isMobile = (value) => {

    let onlyNums = value.replace(/[^\d]/g, '');

    if (onlyNums.length && onlyNums.length > 10) {
        onlyNums = onlyNums.slice(0, 10)
    }

    if (!value) {
        return value;
    }
    return onlyNums;
};
