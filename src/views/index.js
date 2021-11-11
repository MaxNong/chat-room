import React from 'react';
import '@/assets/sass/views/index.scss'
import { Container} from 'containers'
import { Sheet } from 'sheet'
class IndexPage extends React.Component {
  clickItem (item) {
    this.props.history.push({pathname: '/chat', state: {value: item}})
  }
	render() {
    let sheetList = [
      {
        title: '群聊11',
        text: '[0条]暂无消息'
      }
      // {
      //   title: '腾讯新闻',
      //   text: '实现新时代强军目标'
      // },
      // {
      //   title: '订阅号消息',
      //   text: '你有很多新消息'
      // },
      // {
      //   title: '爱国欧体系群',
      //   text: '[234条]爱醒醒：1990收35个以太'
      // }
    ]
		return (
			<div>
			  <Container title="微信">
				<div className="search-box">
			  	<input className='search' placeholder="搜索"/>
				</div>
        <Sheet sheetList={sheetList} clickItem={this.clickItem.bind(this)}></Sheet>
        </Container>
			</div>
		)
	}
}

export default IndexPage

