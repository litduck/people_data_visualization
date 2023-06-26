function map(cities,mapData,barData,categoryData) {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"),"vintage");
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  console.log(mapData)
	var year = ["2011","2012","2013","2014", "2015", "2016", "2017", "2018","2019","2020","2021"];
	var option={
  	timeline: {
		data: year,
		axisType: 'category',
		autoPlay: true,
		playInterval: 3000,
		left: '10%',
		right: '10%',
		bottom: '3%',
		width: '80%',
          //  height: null,
        label: {
            normal: {
                textStyle: {
                    color: '#ddd'
                }
            },
            emphasis: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        symbolSize: 10,
        lineStyle: {
            color: '#555'
        },
        checkpointStyle: {
            borderColor: '#777',
            borderWidth: 2
        },
        controlStyle: {
            showNextBtn: true,
            showPrevBtn: true,
            normal: {
                color: '#666',
                borderColor: '#666'
            },
            emphasis: {
                color: '#aaa',
                borderColor: '#aaa'
            }
        },
    },
  	baseOption: {
  	    animation: true,
  	    animationDuration: 1000,
  	    animationEasing: 'cubicInOut',
  	    animationDurationUpdate: 1000,
  	    animationEasingUpdate: 'cubicInOut',
  	    grid: {
  	        right: '3%',
  	        top: '13%',
  	        bottom: '12%',
  	        width: '20%'
  	    },
  	    tooltip: {
  	        trigger: 'axis', // hover触发器
  	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
  	            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
  	            shadowStyle: {
  	                color: 'rgba(150,150,150,0.1)' //hover颜色
  	            }
  	        }
  	    },
  	    geo:{
  	        type:'map',
  	        map:'china',
  	        roam:true,
  	        label:{
  	            show:true
  	        },//标签显示
  	        zoom:1,//初始化缩放比例
  	        center:[113.4668, 34.6234]//贵州的中心坐标设置为地图中心点的坐标
          },
  		visualMap:{
  			min:0,
  			max:15000,
  			inRange:{
  				color:['#ffc7c7','#d87a7a','#d85757']
  			},
  			calculable:true
  		}
  	},
  	options: [],
};
  
for (var n = 0; n < year.length; n++) {
	option.options.push({
		  // backgroundColor: '#fef8ef',
		title: [
			{
				  text: '近十年人口密度热力图',
				   left: 'center',
				   textStyle: {
					   color: '#949d8f'
				   }
			},
			{
				id: 'statistic',
				text: year[n] + "年数据统计情况",
				left: '73%',
				top: '5%',
				textStyle: {
					color: '#949d8f',
					fontSize: 30
				}
			}
		],
		xAxis: {
			type: 'value',
			scale: true,
			position: 'top',
			min: 0,
			boundaryGap: false,
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false,
				margin: 2,
				textStyle: {
					color: '#aaa'
				}
			},
		},
		yAxis: {
			type: 'category',
			  //  name: 'TOP 20',
			nameGap: 16,
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fef8ef'
				}
			},
			splitLine:{
				show: false
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#5e5e5e'
				}
			},
			data: categoryData[n]
		},
		series: [
			{
				type: 'map',
				map: 'china',
				geoIndex: 0,
				aspectScale: 0.75, //长宽比
				showLegendSymbol: false, // 存在legend时显示
				label: {
					normal: {
						show: false
					},
					emphasis: {
						show: false,
						textStyle: {
							color: '#fff'
						}
					}
				},
				roam: true,
				itemStyle: {
					normal: {
						areaColor: '#031525',
						borderColor: '#FFFFFF',
					},
						emphasis: {
						areaColor: '#2B91B7'
					},
				},
				animation: false,
				data: mapData[n]
			},
			  
			//柱状图
			{
				zlevel: 1.5,
				type: 'bar',
				symbol: 'none',
				data: barData[n]
			}
		]
	})
}
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
};


export {map};
