/**
 * @Date 2019-01-17
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';


const option = {
    title: {
        text: '关系纽带图'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    legend: {
        x: 'center',
        show: false,
        data: ['朋友','同学','同乡','亲戚']
    },

    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
                {
                    name: '朋友',
                    itemStyle: {
                        normal: {
                            color: '#009800',
                        }
                    }
                },
                {
                    name: '同学',
                    itemStyle: {
                        normal: {
                            color: '#4592FF',
                        }
                    }
                },
                {
                    name: '同乡',
                    itemStyle: {
                        normal: {
                            color: '#3592FF',
                        }
                    }
                },
                {
                    name: '亲戚',
                    itemStyle: {
                        normal: {
                            color: '#4132DD',
                        }
                    }
                }
            ],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    }
                }
            },
            force: {
                repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: [
                {
                    name: '张三',
                    draggable: true
                },
                {
                    name: '李四',
                    category: 1,
                    draggable: true
                },
                {
                    name: '王老五',
                    category: 1,
                    draggable: true
                },
                {
                    name: '赵小六',
                    category: 1,
                    draggable: true
                },
                {
                    name: '田七',
                    category: 1,
                    draggable: true
                },
                {
                    name: '王八蛋',
                    category: 1,
                    draggable: true
                },
                {
                    name: '陈瞎子',
                    category: 1,
                    draggable: true
                },
                {
                    name: '翠花',
                    category: 1,
                    draggable: true
                },
                {
                    name: '素芬',
                    category: 1,
                    draggable: true
                },
                {
                    name: '李小贱',
                    category: 1,
                    draggable: true
                },
                {
                    name: '王二娃',
                    category: 1,
                    draggable: true
                },
                {
                    name: '朱一群',
                    category: 1,
                    draggable: true
                },
                {
                    name: '狗蛋',
                    category: 1,
                    draggable: true
                },
            ],
            links: [
                {
                    source: 0,
                    target: 1,
                    category: 0,
                    value: '朋友'
                },
                {
                    source: 0,
                    target: 2,
                    value: '同学'
                },
                {
                    source: 2,
                    target: 3,
                    value: '同学'
                },
                {
                    source: 1,
                    target: 4,
                    value: '亲戚'
                },
                {
                    source: 0,
                    target: 5,
                    value: '同乡'
                },
                {
                    source: 3,
                    target: 6,
                    value: '表亲'
                },
                {
                    source: 4,
                    target: 6,
                    value: '同学'
                },
                {
                    source: 3,
                    target: 7,
                    value: '朋友'
                },
                {
                    source: 0,
                    target: 9,
                    value: '同乡'
                },
                {
                    source: 5,
                    target: 10,
                    value: '亲戚'
                },
                {
                    source: 3,
                    target: 12,
                    value: '同乡'
                },
                {
                    source: 8,
                    target: 9,
                    value: '朋友'
                },
                {
                    source: 12,
                    target: 2,
                    value: '同乡'
                },
                {
                    source: 11,
                    target: 9,
                    value: '同学'
                },

            ],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]

};


export default class EchartsForce extends React.Component{
    render(){
        return(
            <ReactEcharts option={option} style={{ height: '400px', width: '100%'}} className={'react_for_echarts'}/>
        );
    }
}