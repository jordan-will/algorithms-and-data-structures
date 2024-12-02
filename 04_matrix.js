const checkSizeMatrix = (a, b) => {
    if (a.length != b.length) {
        return false
    }

    for (let i = 0; i < size; i++) {
        if (a[i].length !== b[i].length) {
            return false
        }
    }

    return true
}

const sumMatrix = (a, b, size) => {

    if (!checkSizeMatrix(a, b)) return 'Matrix must have same dimesions'

    let c = new Array(size);

    for (let i = 0; i < size; i++) {
        c[i] = new Array(a[i].length);
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            c[i][j] = a[i][j] + b[i][j]
        }
    }

    return c
}

const mulMatrix = (a, b, size) => {

    if (!checkSizeMatrix(a, b)) return 'Matrix must have same dimesions'

    let c = new Array(size);
    for (let i = 0; i < size; i++) {
        c[i] = new Array(a[i].length);
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            c[i][j] = 0
            for (k = 0; k < size; k++) {
                c[i][j] = c[i][j] + a[i][k] * b[k][j]
            }
        }
    }

    return c
}