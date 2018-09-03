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
			},
			{
				text: '朋友1',
				icon: 'icon-qiabao'
			},
			{
				text: '朋友1',
				icon: 'icon-biaoqing'
			}
    ]
    let sheetListB = [
      {
				text: '朋友B',
				icon: 'icon-baibaoxiang'
			},
			{
				text: '朋友B',
				icon: 'icon-task-'
			},
			{
				text: '朋友B',
				icon: 'icon-qiabao'
			},
			{
				text: '朋友B',
				icon: 'icon-biaoqing'
			}
    ]
		return (
			<div>
				<Container>
				<ThinSlice obj={{text: '朋友圈', icon: 'icon-qianbao'}}></ThinSlice>
				<div className="item-dis"></div>
        <GroupSheet sheetList={sheetListA}></GroupSheet>
				<div className="item-dis"></div>
        <ThinSlice obj={{text: 'AIFUNS', icon: 'icon-qianbao'}}></ThinSlice>
        <div className="item-dis"></div>
				<GroupSheet sheetList={sheetListA}></GroupSheet>
				<div className="item-dis"></div>
				<GroupSheet sheetList={sheetListB}></GroupSheet>
				</Container>
			</div>
		)
	}
}

export default Me

