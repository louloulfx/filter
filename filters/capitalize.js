module.exports = (input) => {
    if (input) {
        return input.toUpperCase();
    } else {
        throw new Error('No input')
    }
}
