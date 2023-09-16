function getType(arg: unknown) {
    const type = Object.prototype.toString.call(arg);
    return type.slice(8, -1).toLowerCase();
}

enum DATATYPE {
    OBJECT = 'object',
    FUNCTION = 'function'
}

function isFunction(arg: unknown) {
    return getType(arg) === DATATYPE.FUNCTION;
}

console.log(isFunction(() => {}))
