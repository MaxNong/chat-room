import React from 'react';
import { Container} from 'containers'
import { ThinSlice, GroupSheet } from 'sheet'

class Me extends React.Component {
	render() {
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
    let sheetListC = [
      {
				text: '购物',
				icon: 'icon-baibaoxiang'
			},
			{
				text: '游戏',
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
        <ThinSlice obj={{text: '附近的人', icon: 'icon-qianbao'}}></ThinSlice>
        <div className="item-dis"></div>
        <GroupSheet sheetList={sheetListC}></GroupSheet>
        <div className="item-dis"></div>
        <ThinSlice obj={{text: '小程序', icon: 'icon-qianbao'}}></ThinSlice>
				</Container>
			</div>
		)
	}
}

export default Me

