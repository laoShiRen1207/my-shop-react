// product 的所有操作
import { get,post } from "../request"

/**
 * 获取列表
 * @param {} params 
 */
export function getList(params){
    return get('data.json',params)
} 