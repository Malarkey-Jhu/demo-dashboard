// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
import { TableListItem, JobItemDataType } from './data';

/** 获取规则列表 GET /api/rule */
export async function jobs(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    data: JobItemDataType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/jobs', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function getLoadJobDetail(params: { id: string }) {
  return request<{
    data: JobItemDataType;
    success?: boolean;
  }>('/api/jobs/load', {
    method: 'GET',
    params,
  });
}

export async function getFreeJobDetail(params: { id: string }) {
  return request<{
    data: JobItemDataType;
    success?: boolean;
  }>('/api/jobs/free', {
    method: 'GET',
    params,
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/api/rule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/api/rule', {
    data,
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(data: { key: number[] }, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    data,
    method: 'DELETE',
    ...(options || {}),
  });
}
