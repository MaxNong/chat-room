import React from 'react'
import '@/components/sheet/index.scss'
import {Icon} from 'icon'

class Sheet extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const sheepList = this.props.sheetList
    return (
      <div>
        {sheepList.map((sheet, i) => {
        return (
          <div key={i} className="sheet-box" onClick={()}>
            <div className="sheet-left">
            <Icon href='icon-dingyuehao' size='40'></Icon>
            </div>
            <div className="sheet-right">
              <span className="h-titie">{sheet.title}</span>
              <span className="h-text">{sheet.text}</span>
            </div>
          </div>
        )
      })}
      </div>
    )
  }
}

class ThinSlice extends React.Component {
  render () {
    return (
      <div className="thin-slice-box">
      <div className="left-icon">
        <Icon href={this.props.obj.icon} size='20'></Icon>
        </div>
        <span className="thinText">{this.props.obj.text}</span>
        <div className="right-icon" >
        <Icon href='icon-jiantou' size='20'></Icon>
        </div>
      </div>
    )
  }
}

class GroupSheet extends React.Component {
  render () {
    let groupSheetList = this.props.sheetList
    return (
      <div>
        {groupSheetList.map((sheet, i) => {
          return (
            <div key={i} className="thin-slice-box">
              <div className="left-icon">
                <Icon href={sheet.icon} size='20'></Icon>
              </div>
              <span className="thinText">{sheet.text}</span>
              <div className="right-icon" >
                  <Icon href='icon-jiantou' size='20'></Icon>
              </div>
           </div>
          )
        })}
      </div>
    )
  }
}

export {Sheet, ThinSlice, GroupSheet}