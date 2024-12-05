import React from 'react'
class Length extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {length:17}

        this.add = this.add.bind(this); // чтобы заработала функция add
        this.reset = this.reset.bind(this); // чтобы заработала функция reset
    }

    add()
    {
        this.setState({length:this.state.length + 5})
    } 

    reset()
    {
        this.setState({length:17})
    } 
        

    render()
    {
        return(
            <>
                <div><input size={this.state.length}/></div>
                <button onClick={this.add}>Увеличить</button>
                <button onClick={this.reset}>Сбросить</button> 
                <hr/>               
            </>
        )
    }
}
export default Length;