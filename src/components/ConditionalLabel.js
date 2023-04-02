import React from 'react';

class Conditionallabel extends React.Component{
    render(){
        const {isShow}=this.props;

        if(isShow){
            return(
                <>
                    label is show!
                </>
            )
        }
        return;
    }
}
export default Conditionallabel;