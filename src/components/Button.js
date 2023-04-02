import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate=(nextProps)=>{
        const {handleLocale:currentHandleLocale,locale:currentLocale}=this.props;
        const {handleLocale:newxtHandleLocale,locale:nextLocale}=nextProps;

        if(currentHandleLocale===newxtHandleLocale && nextLocale===currentLocale){
            return false;
        }
        return true;
    }
    render(){
        console.log('Button Component Rendered');
        const {locale,handleLocale,children}=this.props
        return(
            <button onClick={()=>handleLocale()}>
                {children}
            </button>
        )
    }
}

export default Button;