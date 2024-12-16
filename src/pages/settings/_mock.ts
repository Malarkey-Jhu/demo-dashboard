import type { Request, Response } from 'express';
import { QuotaItemDataType } from "./data.t";
import mockjs from 'mockjs';

function genQuota(count: number): QuotaItemDataType[] {
  return Array.from({ length: count }, (_, index) => ({
    path: `/data/dir/to/path-${index}`,
    state: 'Available',
    quotaBytes: mockjs.Random.integer(1000000000, 1000000000000),
    usedBytes: mockjs.Random.integer(1000000000, 1000000000000),
    reservedBytes: mockjs.Random.integer(1000000000, 1000000000000)
  }));
}


function getQuota(req: Request, res: Response) {
  const quota = genQuota(10);
  
  return res.json({
    data: quota,
  });
}


export default {
  'GET /api/v1/quota': getQuota,
}