import React from 'react';
import { Header, Footer} from 'containers'
import {ThinSlice} from 'sheet'

class Me extends React.Component {
	render() {
		return (
			<div>
        <Header></Header>
        <ThinSlice></ThinSlice>
        <Footer></Footer>
			</div>
		)
	}
}

export default Me

