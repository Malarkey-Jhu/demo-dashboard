export type TableListItem = {
  id: string;
  startTime: string;
  state: 'SUCCEEDED' | 'FAILED' | 'IN_PROGRESS';
  type: 'LOAD' | 'FREE' | 'COPY';
};

export type TableListPagination = {
  total: number;
  pageSize: number;
  current: number;
};

export type TableListData = {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
};

export type TableListParams = {
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
};

export type JobItemDataType = {
  id: string;
  startTime: string;
  state: 'SUCCEEDED' | 'FAILED' | 'IN_PROGRESS';
  type: 'LOAD' | 'FREE' | 'COPY';
};

