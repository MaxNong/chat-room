import React from 'react';
import '@/index.scss'
import { Header } from 'containers'
import { Sheet } from 'sheet'
import 
class IndexPage extends React.Component {
	render() {
    let sheetList = [
      {
        title: '标题1',
        text: '内容1'
      },
      {
        title: '标题1',
        text: '内容1'
      },
      {
        title: '标题1',
        text: '内容1'
      },
      {
        title: '标题1',
        text: '内容1'
      }
    ]
		return (
			<div>
			  <Header></Header>
				<div className="search-box">
			  	<input className='search' placeholder="搜索"/>
				</div>
        <Sheet sheetList={sheetList}></Sheet>
			</div>
		)
	}
}

export default IndexPage

