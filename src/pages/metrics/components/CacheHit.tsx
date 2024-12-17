import MyEchart, { ECOption } from "@/components/Echart";



const option: ECOption = {
  title: {
    text: 'Cache Hit/Miss Calls',
    textStyle: {
      color: '#fff'  // For dark theme
    }
  },
  xAxis: {
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
    data: [ '2024-01-18T10:55:00.000Z',
      '2024-01-18T10:55:30.000Z',
      '2024-01-18T10:56:00.000Z',
      '2024-01-18T10:56:30.000Z',
      '2024-01-18T10:57:00.000Z',]
  },
  grid: {
    left: '6%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  yAxis: {
    nameTextStyle: {
      color: '#fff'  // For dark theme
    },
    axisLabel: {
      color: '#fff'  // For dark theme
    },
  },
  legend: {
    top: '10%',
    textStyle: {
      color: '#fff'  // 設置文字顏色為白色
    },
    data: ['Hit', 'Miss']
  },
  series: [
    {
      name: 'Hit',
      type: 'bar',
      data: [23, 24, 18, 25, 18],
      barGap: '20%',
      barCategoryGap: '40%',
    },
    {
      name: 'Miss',
      type: 'bar',
      data: [12, 14, 9, 9, 11]
    }
  ],
  tooltip: {
    trigger: 'axis'
  }
};


export default function CacheHit() {
  return <MyEchart option={option}/>
}
