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
          <div key={i} className="sheet-box">
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
      <div>
        <Icon href='icon-dingyuehao' size='40'></Icon>
      </div>
    )
  }
}

export {Sheet}