import React from 'react';

function withToolTip(Component){
    return class WithTooltip extends React.Component{

        state = {
            showToolTip : false
        }

        handleMouseOver = ()=> {
            this.setState({showToolTip:true})
        }

        handleMouseOut = ()=> {
            this.setState({showToolTip : false})
        }

        render(){
            return (
                <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    <Component showToolTip={this.state.showToolTip} />
                </div>
            )
        }
    }
}

export default withToolTip;