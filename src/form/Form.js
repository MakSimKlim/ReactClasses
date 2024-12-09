import React from 'react';

class Form extends React.Component
{
    state = {name:"Name", email:"Email"}

    // updateName = (event) => this.setState({name: event.target.value})
    // updateEmail = (event) => this.setState({email: event.target.value})
    update = (event) => this.setState({[event.target.name]:event.target.value})

    render()
    {
        return(
            <>
            <div>
                <form>
                    {/* Name:<input value={this.state.name} onChange={this.updateName}/>
                    <br/>
                    Email:<input value={this.state.email} onChange={this.updateEmail}/> */}
                    Name:<input value={this.state.name} name="name" onChange={this.update}/>
                    <br/>
                    Email:<input value={this.state.email} name="email" onChange={this.update}/>
                </form>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>                
            </div>
            </>
        )
    }
}
export default Form;