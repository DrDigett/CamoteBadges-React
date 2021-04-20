import React from 'react'

class BadgeForm extends React.Component{     
    /*
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    */

    /*
    handleClick = (e) =>{
        console.log('Button was clicked');
    };
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form was submited');
        console.log(this.state);
    };
    */

    render(){
        return(
            <div>
                <h1>Nuevo Badge</h1>

                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>first name</label>
                        <input
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.formValues.firstName}></input>
                    </div>

                    <div className="form-group">
                        <label>last name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName" 
                            value={this.props.formValues.lastName}></input>
                    </div>

                    <div className="form-group">
                        <label>email</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email"
                            name="email" 
                            value={this.props.formValues.email}></input>
                    </div>

                    <div className="form-group">
                        <label>Job</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle" 
                            value={this.props.formValues.jobTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter" 
                            value={this.props.formValues.twitter}></input>
                    </div>
                    
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;