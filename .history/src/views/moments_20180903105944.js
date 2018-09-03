import React from 'react';
import { Container} from 'containers'
import { ThinSlice, GroupSheet } from 'sheet'

class Me extends React.Component {
	render() {
		window.name = "haha"
		let sheetList = [
			{
				text: '新的朋友',
				icon: 'icon-baibaoxiang'
			},
			{
				text: '群聊',
				icon: 'icon-task-'
			},
			{
				text: '标签',
				icon: 'icon-qiabao'
			},
			{
				text: '公总号',
				icon: 'icon-biaoqing'
			}
    ]
    let sheetListA = [
      {
				text: '扫一扫',
				icon: 'icon-baibaoxiang'
			},
			{
				text: '摇一摇',
				icon: 'icon-task-'
			}
    ]
    let sheetListB = [
      {
				text: '看一看',
				icon: 'icon-baibaoxiang'
			},
			{
				text: '搜一搜',
				icon: 'icon-task-'
			}
    ]
		return (
			<div>
				<Container>
				<ThinSlice obj={{text: '朋友圈', icon: 'icon-qianbao'}}></ThinSlice>
				<div className="item-dis"></div>
        <GroupSheet sheetList={sheetListA}></GroupSheet>
				<div className="item-dis"></div>
        <GroupSheet sheetList={sheetListB}></GroupSheet>
        <div className="item-dis"></div>
        <ThinSlice obj={{text: 'AIFUNS', icon: 'icon-qianbao'}}></ThinSlice>
        <div className="item-dis"></div>
				</Container>
			</div>
		)
	}
}

export default Me

