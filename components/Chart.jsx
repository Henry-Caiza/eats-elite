import ReactECharts from 'echarts-for-react';

const Chart = () => {
    const gaugeData = [
        {
            value: 80,
            name: 'Dine In',
            title: {
                offsetCenter: ['0%', '-50%']
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '-30%']
            },
            itemStyle: {
                color: '#65B0F6'
            }
        },
        {
            value: 40,
            name: 'To Go',
            title: {
                offsetCenter: ['0%', '-10%']
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '10%']
            },
            itemStyle: {
                color: '#FFB572'
            }
        },
        {
            value: 70,
            name: 'Delivery',
            title: {
                offsetCenter: ['0%', '30%']
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '50%']
            },
            itemStyle: {
                color: '#FF7CA3'
            }
        }
    ];
    const options = {

        series: [

            {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                radius: '95%',
                pointer: {
                    show: false
                },
                global: false,
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                    clip: false,
                    itemStyle: {
                        borderWidth: 0,
                        borderColor: '#1F1D2B'
                    }
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0.10,
                        width: 30
                    }
                },
                splitLine: {
                    show: false,
                    distance: 0,
                    length: 10
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    distance: 50
                },
                data: gaugeData,
                title: {
                    fontSize: 10,
                    color: '#d1d5db',
                    height: 22,
                },
                detail: {
                    width: 30,
                    height: 10,
                    fontSize: 10,
                    color: 'inherit',
                    borderColor: 'inherit',
                    borderRadius: 20,
                    borderWidth: 1,
                    formatter: '{value}',

                },



            }
        ]
    };

    return <ReactECharts option={options}
        style={{
            height: '210px',
            width: '100%',
        }}
        className='echarts-for-echarts' />;
};

export default Chart;