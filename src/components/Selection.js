import React from "react"
import "../styles/Child.css"

class Selection extends React.Component{
    constructor(){
        super()
        this.state={
            selectionStyle:{background:''}
        }
    }
    updateSelectionStyle=(value)=>{
        this.setState({selectionStyle: value})
    }
    render(){
        return <div className="fix-box" style={this.state.selectionStyle} onClick={()=>{
            // this.setState({selectionStyle: this.props.nextBackground})
            this.props.applyColor(this.updateSelectionStyle)
        }}>
            <h2 className="subheading">Selection</h2>
        </div>
    }
}

export default Selection