/**
 * 
 * @param v1 第一个版本号
 * @param v2 第二个版本号
 * @returns -1 | 0 | 1 -1指第一个版本号低于第二个
 */

enum ECompareState {
    MORE = 1,
    LESS = -1,
    EQUAL = 0
}

function versionCompare(v1: string, v2: string): number {
    const v1Arr = v1.split('.');
    const v2Arr = v2.split('.');
    const len = Math.max(v1Arr.length, v2Arr.length);

    while(v1Arr.length < len) {
        v1Arr.push('0');
    }
    while(v2Arr.length < len) {
        v2Arr.push('0');
    }
    for(let i = 0; i < len; i++) {
        if(parseInt(v1Arr[i]) > parseInt(v2Arr[i])) {
            return ECompareState.MORE;
        } else if(parseInt(v1Arr[i]) < parseInt(v2Arr[i])) {
            return ECompareState.LESS;
        }
    }
    return ECompareState.EQUAL;
}

export default versionCompare;