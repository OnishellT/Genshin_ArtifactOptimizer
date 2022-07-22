export function estimate(iterCount) {
    return Math.floor(iterCount * 0.006);
}

export function toChs(iterCount) {
    let time = Math.floor(0.006 * iterCount / 1000);
    if (time < 1) {
        return "Less than 1 second";
    } else {
        let min = Math.floor(time / 60);
        if (min === 0) {
            return `${time} Seconds`;
        }
        return `${min} Minutes And ${Math.floor(time - 60 * min)} Seconds`;
    }
}