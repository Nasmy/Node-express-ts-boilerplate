export const commonResponse = (success: any = false, code: any, data: any = {}, message: any = "", error: any = "") => {
    return {
        success: success,
        code: code,
        data: data,
        message: message,
        error: error
    };
}