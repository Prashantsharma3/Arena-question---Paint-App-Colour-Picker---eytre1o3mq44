import React from 'react';

// const ColourSelector = (props) => {
//   const { config, selectNextBackground } = props
//   const { background } = config;
//   return (
//     <button className={/* classname should come here */} onClick={() => selectNextBackground({background: background})}>
//       {/* label should come here */}
//     </button>
//   )
// }

class ColourSelector extends React.Component{

  // this.props.config, this.props.selectNextBackground
  render(){
    console.log(this.props);
    return (
      <button className={this.props.config.className} onClick={() => this.props.selectNextBackground({background: this.props.config.background})}>
        {/* label should come here */}
        {this.props.config.label}
      </button>
    )
  }
}


export default ColourSelector;
