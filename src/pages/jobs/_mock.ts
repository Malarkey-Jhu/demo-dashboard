import type { Request, Response } from 'express';
import mockjs from 'mockjs';
import type { JobItemDataType } from './data.d';


const jobTypes = ['LOAD', 'FREE', 'COPY'];
const jobStates = ['SUCCEEDED', 'FAILED', 'IN_PROGRESS'];

function genJobs(count: number): JobItemDataType[] {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: mockjs.mock({
        'id': /\d{8}-\d{8}-\d{8}/,
      }).id.toString(),
      startTime: new Date(new Date().getTime() - 1000 * 60 * 60 * i).toISOString(),
      state: jobStates[mockjs.mock({ 'x|0-2': 1 }).x],
      type: jobTypes[mockjs.mock({ 'x|0-2': 1 }).x],
    });
  }
  return list as JobItemDataType[];
}

const fake_jobs = genJobs(20);
function getJobs(req: Request, res: Response) {
  const params = req.query as any;
  let result = fake_jobs;


  if (params.type) {
    result = result.filter((item) => item.type === params.type);
  }
  if (params.state) {
    result = result.filter((item) => item.state === params.state);
  }
  if (params.id) {
    result = result.filter((item) => item.id === params.id);
  }
  return res.json({
    data:  result,
  });
}

function getLoadJobDetail(req: Request, res: Response) {
  const params = req.query as any;

  const job = fake_jobs.find((item) => item.id === params.id);

  const fake_detail = {
    "id": job?.id,
    "startTime": job?.startTime,
    "state": job?.state,
    "runningState": "",
    "errorMessage": {},
    "failedFileListPath": "",
    "path": "s3://my-bucket/dir/to/path",
    "index": "",
    "skipIfExists": false,
    "loadMetadataOnly": false,
    "verify": false,
    "bandwidth": 0,
    "timeElapsedMilliseconds": 10949,
    "loadedBytes": 10485760,
    "skippedBytes": 0,
    "totalBytes": 10485760,
    "loadedNonEmptyFiles": 1,
    "failedFiles": 0,
    "scannedFiles": 1,
    "quota": {
      "totalBytes": 0,
      "remaining": 0
    },
    "quotaCheckError": ""
  }
  return res.json({
    data:  fake_detail,
  });
}

function getFreeJobDetail(req: Request, res: Response) {
  const params = req.query as any;

  const job = fake_jobs.find((item) => item.id === params.id);

  const fake_detail = {
    "id": job?.id,
    "startTime": job?.startTime,
    "state": job?.state,
    "errorMessage": {},
    "path": "s3://my-bucket/dir/to/path",
    "timeElapsedMilliseconds": 4197,
    "freedBytes": 10485760,
    "failedBytes": 0,
    "totalBytes": 10485760,
    "freedFiles": 1,
    "failedFiles": 0,
    "totalFiles": 10485760
  }

  return res.json({
    data:  fake_detail,
  });
}



export default {
  'GET  /api/jobs': getJobs,
  'GET  /api/jobs/load': getLoadJobDetail,
  'GET  /api/jobs/free': getFreeJobDetail,
};
