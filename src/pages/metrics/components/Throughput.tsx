import MyEchart, { ECOption } from "@/components/Echart";

const getThroughputOption = (type: 'read' | 'write' ): ECOption => ({
  title: {
    text: `${type === 'read' ? 'Read' : 'Write'} Throughput(MB/Min)`,
    textStyle: {
      color: '#fff'  // For dark theme
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '6%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    name: 'Time',
    nameTextStyle: {
      color: '#fff'  // For dark theme
    },
    axisLabel: {
      color: '#fff',  // For dark theme
      interval: 1,     // Show every other label
      rotate: 45,      // 旋轉45度
      formatter: (value: string) => {
        // 只顯示時間部分 (HH:mm)
        return value.split('T')[1].substr(0, 5);
      }
    },
    data: [
      '2024-01-18T10:55:00.000Z',
      '2024-01-18T10:55:30.000Z',
      '2024-01-18T10:56:00.000Z',
      '2024-01-18T10:56:30.000Z',
      '2024-01-18T10:57:00.000Z',
      '2024-01-18T10:57:30.000Z',
      '2024-01-18T10:58:00.000Z',
      '2024-01-18T10:58:30.000Z',
      '2024-01-18T10:59:00.000Z',
      '2024-01-18T10:59:30.000Z'
    ]
  },
  yAxis: {
    type: 'value',
    name: 'Throughput (MB)',
    nameTextStyle: {
      color: '#fff'  // For dark theme
    },
    axisLabel: {
      color: '#fff'  // For dark theme
    },
    min: 140,  // 設置最小值
    max: 180,  // 設置最大值
    interval: 10, // 設置刻度間隔
  },
  series: [
    {
      name: 'READ',
      type: 'line',
      color: '#186fdb',
      data: [145.5, 158.2, 162.7, 149.3, 156.8, 168.4, 172.1, 165.9, 159.6, 163.2]
    }
  ],
  theme: 'dark'
});

export default function Throughput({type}: {type: 'read' | 'write'}) {
  const option = getThroughputOption(type)
  return <MyEchart option={option}/>
}
