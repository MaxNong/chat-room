import React from 'react';
import { Container } from 'containers'
import { ThinSlice, GroupSheet } from 'sheet'
import '@/assets/sass/views/me.scss'

class Me extends React.Component {
	render() {
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
				<Container title="我">
				<ThinSlice obj={{text: '钱包', icon: 'icon-qianbao'}}></ThinSlice>
				<div className="item-dis"></div>
				<GroupSheet sheetList={sheetList}></GroupSheet>
				<div className="item-dis"></div>
				<ThinSlice obj={{text: '设置', icon: 'icon-ordinaryset'}}></ThinSlice>
				</Container>
			</div>
		)
	}
}

export default Me

