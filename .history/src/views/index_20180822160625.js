import React from 'react';
import '@/index.scss'
import { Header, Footer} from 'containers'
import { Sheet } from 'sheet'
import {Icon} from 'icon'
class IndexPage extends React.Component {
	render() {
    let sheetList = [
      {
        title: '六域链官方交流群',
        text: '[399条]苏杨芳：以后出门，估计要小心'
      },
      {
        title: '腾讯新闻',
        text: '实现新时代强军目标'
      },
      {
        title: '订阅号消息',
        text: '你有很多新消息'
      },
      {
        title: '爱国欧体系群',
        text: '[234条]爱'
      }
    ]
		return (
			<div>
			  <Header></Header>
				<div className="search-box">
			  	<input className='search' placeholder="搜索"/>
				</div>
        <Sheet sheetList={sheetList}></Sheet>
        <Footer></Footer>
			</div>
		)
	}
}

export default IndexPage

