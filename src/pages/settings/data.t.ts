export type TableListItem = QuotaItemDataType;

export type QuotaItemDataType = {
  path: string;
  state: string;
  quotaBytes: number;
  usedBytes: number;
  reservedBytes: number;
};