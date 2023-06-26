# people_data_visualization
### 第七次人口普查数据可视化（node.js+mysql+express+echarts+ajax+jquery)
前排提醒：这是我数据库的期末小作品，此前没有学习过后端，再加上选题晚、临近期末事情比较多，所以做的比较简陋，代码也有点乱且冗余，请见谅。

#### 作品展示
![第七次人口普查数据可视化](https://github.com/litduck/people_data_visualization/blob/main/%E7%AC%AC%E4%B8%83%E6%AC%A1%E4%BA%BA%E5%8F%A3%E6%99%AE%E6%9F%A5%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96.jpeg)

#### 注意
如果您想用这个作品，请将people_data.sql导入您的数据库中，并在mysql.js中更改以下参数（您自己的参数）：
```
var connection = mysql.createConnection({    
	host     : 'localhost',      
	user     : 'root',             
	password : '123456',      
	port: '3306',
	database: 'people_data'
});
```
运行此文件后，打开index.html就可以看到作品效果了。
