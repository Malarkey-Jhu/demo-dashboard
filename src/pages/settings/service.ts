// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
import { QuotaItemDataType } from './data.t';

/** GET /api/v1/quota */
export async function quota(params: {},  options?: { [key: string]: any },) {
  return request<{
    data: QuotaItemDataType[];
  }>('/api/v1/quota', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}