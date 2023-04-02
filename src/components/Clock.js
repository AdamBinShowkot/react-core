import React from 'react';
import Button from './Button';
import Conditionallabel from './ConditionalLabel';


class Clock extends React.Component{
    state={
        date:new Date(),
        locale:'bn-BD'
    }
    
    componentDidMount=()=>{
        this.clockTimer=setInterval(()=>this.tick(),1000);
    }
    handleChangeLocale=()=>{
        this.setState((state)=>{
            if(state.locale==="bn-BD"){
                return{
                    ...state,
                    locale:'en-US'
                }
            }else{
                return{
                    ...state,
                    locale:'bn-BD'
                }
            }
        })
    }
    tick=()=>{
        this.setState({
            date:new Date()
        })
    }

    componentWillUnmount=()=>{
        clearInterval(this.clockTimer);
    }

    render(){

        return(
            <>
                <div style={{padding:"10px"}}>
                    <h1 className='heading'>
                        <span>
                            {
                            this.state.date.toLocaleTimeString(this.state.locale)
                            }
                        </span>
                    </h1>
                    <Button handleLocale={this.handleChangeLocale} locale='en-US'>
                        Change Locale
                    </Button><br/>
                    <Conditionallabel isShow={false} />
                </div>
            </>
        )
    }
}
export default Clock;