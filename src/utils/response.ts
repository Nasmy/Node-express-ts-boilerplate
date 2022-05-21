
/**
 * Api Response Format
 * @param {*} success 
 * @param {*} code 
 * @param {*} data 
 * @param {*} message 
 * @param {*} error 
 * @returns {object}
 */

export const commonResponse = (success: any = false, code: any, data: any = {}, message: any = "", error: any = "") => {
    return {
        success: success,
        code: code,
        data: data,
        message: message,
        error: error
    };
}