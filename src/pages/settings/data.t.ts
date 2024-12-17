export type QuotaItemDataType = {
  path: string;
  state: string;
  quotaBytes: number;
  usedBytes: number;
  reservedBytes: number;
};

export type TTLItemDataType = {
  path: string;
  ttl: number;
};