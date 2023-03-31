import React from 'react';
import Button from './Button';


class Clock extends React.Component{
    state={
        date:new Date(),
        locale:'bn-BD'
    }
    
    componentDidMount=()=>{
        this.clockTimer=setInterval(()=>this.tick(),1000);
    }
    handleChangeLocale=(locale)=>{
        // this.setState((state)=>{
        //     if(state.locale==="bn-BD"){
        //         return{
        //             ...state,
        //             locale:'en-US'
        //         }
        //     }else{
        //         return{
        //             ...state,
        //             locale:'bn-BD'
        //         }
        //     }
        // })
        this.setState({locale})
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
        console.log("Clock Component Rendered");
        return(
            <>
                <div>
                    <h1 className='heading'>
                        <span>
                            {
                            this.state.date.toLocaleTimeString(this.state.locale)
                            }
                        </span>
                    </h1>
                    <Button handleLocale={this.handleChangeLocale} locale='en-US'>
                        Change Locale
                    </Button>
                </div>
            </>
        )
    }
}
export default Clock;