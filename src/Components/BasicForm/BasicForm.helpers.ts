export const displayDuration = (n: number): string => {
    const years: number = Math.floor(n / 12);
    const months: number = n % 12;
    let result: string = '';
    if (years >= 5) {
        result = `${years} lat`;
    } else if (years >= 2) {
        result = `${years} lata`;
    } else if (years === 1) {
        result = `${years} rok`;
    }

    if (!(result === '') && months > 0) {
        result += ' i ';
    }

    if (months >= 5) {
        result += `${months} miesięcy`;
    } else if (months >= 2) {
        result += `${months} miesiące`;
    } else if (months === 1) {
        result += `${months} miesiąc`;
    }
    return result;
};

export const displayRateOfReturn = (n: number): string => {
    return n % 1 === 0 ? `${n}.0%` : `${n}%`;
};
