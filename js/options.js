function setData1(cities,birth,death){
	var myChart = echarts.init(document.querySelector(".bar .chart"),"vintage");
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
			type: 'cross',
				crossStyle: {
					color: '#5e5e5e'
				}
			}
		},
		grid: {
			left: -40,
			top: "30px",
			right: 20,
			bottom: "1%",
			containLabel: true
		},
		toolbox: {
			feature: {
				dataView: { show: true, readOnly: false },
				magicType: { show: true, type: ['line', 'bar'] },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		legend: {
			orient: 'vertical',
			x: "left",
			itemHeight: 8,
			itemWidth: 15,
			data: ['出生人数', '死亡人数'],
			textStyle: {
				fontSize:10,
				color: '#5e5e5e'
			}
		},
		xAxis: [
			{
				type: 'category',
				data: cities,
				fontSize: '2',
				axisPointer: {
					type: 'shadow'
				},
				axisLabel: {
					show: true,
					textStyle: {
						fontSize: 10,
						color: '#5e5e5e'
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				show: false,
				name: '人数',
				fontSize: '2',
			},
		],
		series: [
			{
				name: '出生人数',
				type: 'bar',
				data: birth
			},
			{
				name: '死亡人数',
				type: 'bar',
				data: death
			},
		]
	};
	
	myChart.setOption(option);

	window.addEventListener("resize", function() {
		myChart.resize();
	});
	
};

function setData2(cities,sexpercent){
	var myChart = echarts.init(document.querySelector(".line .chart"),"vintage");
	var option = {
		tooltip: {
			trigger: 'axis',
		},
		grid: {
			left: 20,
			top: "30px",
			right: 20,
			bottom: "1%",
			containLabel: true
		},
		toolbox: {
			feature: {
				dataView: { show: true, readOnly: false },
				magicType: { show: true, type: ['line', 'bar'] },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		xAxis: {
			type: 'category',
			data: cities,
			axisLabel: {
				show: true,
				interval:0,
				textStyle: {
					fontSize: 10,
					color: '#5e5e5e'
				}
			},
			axisLine:{
				lineStyle:{
					color:'#5e5e5e',
					width:1
				}
			}
		},
		yAxis: {
			type: 'value',
			max: 120,
			min: 90,
			axisLabel: {
			    show: false
			},
			axisLine:{
				show:false,
				lineStyle:{
					
					color:'#ffffff',
					width:1
				}
			}
		},
		series: [
			{
				data: sexpercent,
				type: 'line'
			}
		]
	};
	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
	
};

function setData3(education,people){
	var myChart = echarts.init(document.querySelector(".pie .chart"),"vintage");
	var option = {
		legend: {
			icon: "circle", // 修改形状
			itemHeight: 6,
			itemGap: 5,
		    orient: 'vertical',
		    x: "left",
			textStyle: {
				fontSize:10,
			    color: '#5e5e5e'
			}
		},
		grid: {
			left: 20,
			top:0,
			right: 20,
			bottom: "1%",
			containLabel: true
		},
		toolbox: {
			feature: {
				dataView: { show: true, readOnly: false },
				magicType: { show: true, type: ['line', 'bar'] },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},  
		series: [
		    {
				name: 'Nightingale Chart',
				type: 'pie',
				radius: [10, 100],
				center: ['50%', '65%'],
				roseType: 'area',
				itemStyle: {
					borderRadius: 8
				},
				labelLine: {
				  normal: {
						show: false,
					}
				},
				label: {
				  normal: {
						show: false,
				  }
				},
				
				data: [
					{ value: people[0], name: education[0] },
					{ value: people[1], name: education[1] },
					{ value: people[2], name: education[2] },
					{ value: people[3], name: education[3] },
					{ value: people[4], name: education[4] },
					{ value: people[5], name: education[5] },
					{ value: people[6], name: education[6] },
				]
		    }
		]
	};
	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
	
};

function setData4(cities,ages1,ages2,ages3,ages4,ages5,ages6){
	var myChart = echarts.init(document.querySelector(".bar1 .chart"),"vintage");
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			orient: 'vertical',
			x: "left",
			itemHeight: 8,
			itemWidth: 15,
			// data: ['出生人数', '死亡人数'],
			textStyle: {
				fontSize:10,
				color: '#5e5e5e'
			}
		},
		grid: {
			left: "0%",
			top: "30px",
			right: "0%",
			bottom: "1%",
			containLabel: true
		},
		toolbox: {
			feature: {
				dataView: { show: true, readOnly: false },
				magicType: { show: true, type: ['line', 'bar'] },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		xAxis: [
			{
				type: 'category',
				data: cities,
				axisLabel: {
					show: true,
					textStyle: {
						fontSize: 10,
						color: '#5e5e5e'
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				show: false
			}
		],
		series: [
			{
				name: '0-19岁',
				type: 'bar',
				stack: 'Ad',
				emphasis: {
					focus: 'series'
				},
				data: ages1
			},
			{
				name: '20-39岁',
				type: 'bar',
				stack: 'Ad',
				emphasis: {
					focus: 'series'
				},
				data: ages2
			},
			{
				name: '40-59岁',
				type: 'bar',
				stack: 'Ad',
				emphasis: {
					focus: 'series'
				},
				data: ages3
			},
			{
				name: '60-79岁',
				type: 'bar',
				stack: 'Ad',
				emphasis: {
					focus: 'series'
				},
				data: ages4
			},
			{
				name: '80-99岁',
				type: 'bar',
				barWidth: 10,
				stack: 'Ad',
				emphasis: {
					focus: 'series'
				},
				data: ages5
			},
			{
				name: '100岁以上',
				type: 'bar',
				stack: 'Ad',
				emphasis: {
					focus: 'series'
				},
				data: ages6
			},
		]
	};
	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
};

function setData5(ages,sex1,sex2){
	var myChart = echarts.init(document.querySelector(".pie1 .chart"),"vintage");
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: {
			left: -50,
			top: "40px",
			right: "0%",
			bottom: "1%",
			containLabel: true
		},
		toolbox: {
			feature: {
				dataView: { show: true, readOnly: false },
				magicType: { show: true, type: ['line', 'bar'] },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		legend: {
			orient: 'vertical',
			x: "left",
			itemHeight: 8,
			itemWidth: 15,
			// data: ['出生人数', '死亡人数'],
			data: ['男', '女'],
			textStyle: {
				fontSize:10,
				color: '#5e5e5e'
			}
		},
		xAxis: [
			{
			  type: 'value',
			  show: false,
			}
		],
		yAxis: [
			{
				type: 'category',
				show: false,
				data: ages
			}
		],
		series: [
			{
				name: '女',
				type: 'bar',
				stack: 'Total',
				barWidth:4,
				barGap:'80%',
				emphasis: {
					focus: 'series'
				},
				data: sex2
			},
			{
				name: '男',
				type: 'bar',
				stack: 'Total',
				barWidth:4,
				barGap:'80%',
				emphasis: {
					focus: 'series'
				},
				data: sex1
			}
		]
	};
	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
	
};

function setData6(cities,state1,state2,state3,state4){
	var myChart = echarts.init(document.querySelector(".line1 .chart"),"vintage");
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			itemHeight: 10,
			itemWidth: 18,
			data: ['未婚', '有配偶', '离婚', '丧偶'],
			textStyle: {
				fontSize:12,
				color: '#5e5e5e'
			}
		},
		grid: {
			left: 20,
			top: "40px",
			right: 20,
			bottom: "1%",
			containLabel: true
		},
		
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: cities,
			axisLabel: {
				show: true,
				interval:0,
				textStyle: {
					fontSize: 10,
					color: '#5e5e5e'
				}
			},
			axisLine:{
				lineStyle:{
					color:'#5e5e5e',
					width:1
				}
			},
			
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				show: false
			},
			axisLine:{
				show:false,
				lineStyle:{
					color:'#fef8ef',
					width:1
				}
			},
			splitLine:{//去除网格线
						show:false
			},
			
		},
		series: [
			{
				name: '未婚',
				type: 'line',
				stack: 'Total',
				 areaStyle: {},
				      emphasis: {
				        focus: 'series'
				      },
				data: state1
			},
			{
				name: '有配偶',
				type: 'line',
				stack: 'Total',
				data: state2,
				 areaStyle: {},
				      emphasis: {
				        focus: 'series'
				      },
			},
			{
				name: '离婚',
				type: 'line',
				stack: 'Total',
				data: state3,
				 areaStyle: {},
				      emphasis: {
				        focus: 'series'
				      },
			},
			{
				name: '丧偶',
				type: 'line',
				stack: 'Total',
				data: state4,
				 areaStyle: {},
				      emphasis: {
				        focus: 'series'
				      },
			},
		]
	};
	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
};


export {setData1,setData2,setData3,setData4,setData5,setData6};

