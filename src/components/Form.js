import React from 'react';

class FormHandling extends React.Component{
    state={
        title:"Javascript",
        text:"JavaScript is awesome",
        library:"React",
        isAwesome:true
    }
    handleInputChange=(e)=>{
        if(e.target.type==='text'){
            this.setState({
                title:e.target.value
            })
        }else if(e.target.type==='textarea'){
            this.setState({
                text:e.target.value
            })
        }else if(e.target.type==='select-one'){
            this.setState({
                library:e.target.value
            })
        }else if(e.target.type==='checkbox'){
            this.setState({
                isAwesome:e.target.checked
            })
        }else{
            console.log("Nothing here...");
        }
    }

    handleFormSubmit=(e)=>{
        e.preventDefault();
        let {title,text,library,isAwesome}=this.state;
        console.log(title,text,library,isAwesome);
    }
    render(){
        let {title,text,library,isAwesome}=this.state;
        return(
            <>
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <input 
                        type='text' 
                        value={title} 
                        onChange={this.handleInputChange}/>
                        <br/>


                        <textarea 
                        value={text} 
                        onChange={this.handleInputChange}/>
                        <br/>

                        <select value={library} onChange={this.handleInputChange}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                        </select>
                        <br/>

                        <input 
                        type='checkbox' 
                        checked={isAwesome} 
                        onChange={this.handleInputChange}/>
                        <br/>

                        <input 
                        type='submit' 
                        value="Submit"/>
                    </form>
                </div>
            </>
        )
    }
}
export default FormHandling;