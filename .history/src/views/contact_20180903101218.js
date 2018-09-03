import React from 'react';
import { Header, Footer} from 'containers'
import { Sheet } from 'sheet'
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
        text: '[234条]爱醒醒import React from 'react';
        import { Header, Footer } from 'containers'
        import { ThinSlice, GroupSheet } from 'sheet'
        import '@/views/me.scss'
        
        class Me extends React.Component {
          render() {
            window.name = "haha"
            let sheetList = [
              {
                text: '收藏',
                icon: 'icon-baibaoxiang'
              },
              {
                text: '相册',
                icon: 'icon-task-'
              },
              {
                text: '卡包',
                icon: 'icon-qiabao'
              },
              {
                text: '表情',
                icon: 'icon-biaoqing'
              }
            ]
            return (
              <div>
                <Header></Header>
                <ThinSlice obj={{text: '钱包', icon: 'icon-qianbao'}}></ThinSlice>
                <div className="item-dis"></div>
                <GroupSheet sheetList={sheetList}></GroupSheet>
                <div className="item-dis"></div>
                <ThinSlice obj={{text: '设置', icon: 'icon-ordinaryset'}}></ThinSlice>
                <Footer></Footer>
              </div>
            )
          }
        }
        
        export default Me
        
        ：1990收35个以太'
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

