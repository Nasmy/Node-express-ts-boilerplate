import { getTimeStamp } from "./datetime";

const info = (namesspace: string, message: string, object?: any) => {
    if (object)
    {
        console.log(`[${getTimeStamp()}] [INFO] [${namesspace}] ${message}` , object)
    } else {
        console.log(`[${getTimeStamp()}] [INFO] [${namesspace}] ${message}`)
    }
}


const warn = (namesspace: string, message: string, object?: any) => {
    if (object)
    {
        console.warn(`[${getTimeStamp()}] [WARN] [${namesspace}] ${message}` , object)
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namesspace}] ${message}`)
    }
}


const error = (namesspace: string, message: string, object?: any) => {
    if (object)
    {
        console.error(`[${getTimeStamp()}] [ERROR] [${namesspace}] ${message}` , object)
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namesspace}] ${message}`)
    }
}


const debug = (namesspace: string, message: string, object?: any) => {
    if (object)
    {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namesspace}] ${message}` , object)
    } else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namesspace}] ${message}`)
    }
}

export default {
    info,
    warn,
    error,
    debug
}