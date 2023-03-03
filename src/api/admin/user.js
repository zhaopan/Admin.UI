/**
 *  用户服务
 *  @module @/api/admin/user
 */

import request from '@/utils/request'
import scope from './scope'
const apiPrefix = `${process.env.VUE_APP_BASE_API}/${scope}/user/`

/**
 * 查询用户
 */
export const get = (params, config = {}) => {
  return request.get(apiPrefix + 'get', { params: params, ...config })
}

/**
 * 查询分页
 */
export const getPage = (params, config = {}) => {
  return request.post(apiPrefix + 'get-page', params, config)
}

/**
 * 查询用户基本信息
 */
export const getBasic = (params, config = {}) => {
  return request.get(apiPrefix + 'get-basic', { params: params, ...config })
}

/**
 * 查询用户权限信息
 */
export const getPermissions = (params, config = {}) => {
  return request.get(apiPrefix + 'get-permissions', { params: params, ...config })
}

/**
 * 新增用户
 */
export const add = (params, config = {}) => {
  return request.post(apiPrefix + 'add', params, config)
}

/**
 * 修改用户
 */
export const update = (params, config = {}) => {
  return request.put(apiPrefix + 'update', params, config)
}

/**
 * 更新用户基本信息
 */
export const updateBasic = (params, config = {}) => {
  return request.put(apiPrefix + 'update-basic', params, config)
}

/**
 * 修改用户密码
 */
export const changePassword = (params, config = {}) => {
  return request.put(apiPrefix + 'change-password', params, config)
}

/**
 * 重置密码
 */
export const resetPassword = (params, config = {}) => {
  return request.post(apiPrefix + 'reset-password', params, config)
}

/**
 * 设置主管
 */
export const setManager = (params, config = {}) => {
  return request.post(apiPrefix + 'set-manager', params, config)
}

/**
 * 彻底删除用户
 */
export const deleteAsync = (params, config = {}) => {
  return request.delete(apiPrefix + 'delete', { params: params, ...config })
}

/**
 * 批量彻底删除用户
 */
export const batchDelete = (params, config = {}) => {
  return request.put(apiPrefix + 'batch-delete', params, config)
}

/**
 * 删除用户
 */
export const softDelete = (params, config = {}) => {
  return request.delete(apiPrefix + 'soft-delete', { params: params, ...config })
}

/**
 * 批量删除用户
 */
export const batchSoftDelete = (params, config = {}) => {
  return request.put(apiPrefix + 'batch-soft-delete', params, config)
}

/**
 * 上传头像
 */
export const avatarUpload = (params, config = {}) => {
  return request.post(apiPrefix + 'avatar-upload', params, config)
}

export default {
  get,
  getPage,
  getBasic,
  getPermissions,
  add,
  update,
  updateBasic,
  changePassword,
  resetPassword,
  setManager,
  deleteAsync,
  batchDelete,
  softDelete,
  batchSoftDelete,
  avatarUpload
}
