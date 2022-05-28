outer: for (let index = 1; ; index += 1) {
    if (index) {
        const question = prompt('Enter command break or continue?');
        if (question === 'break') {
           break outer;
        }
        else if (question === 'continue') {
            continue outer;
        }
    }
    alert (index);
}
