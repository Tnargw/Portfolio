import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(){
        super()

        this.state={
            name: '',
            nameColor: '',
            email: '',
            emailColor: '',
            message: '',
            messageColor: '',
            status: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
        this.colorChange(e);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let templateParams = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        if(this.state.name === '' || this.state.email === '' || this.state.message === ''){
            this.setState({
                nameColor: this.state.name === '' ? 'red' : '',
                emailColor: this.state.email === '' ? 'red' : '',
                messageColor: this.state.message === '' ? 'red' : '',
                status: "OOPS! YOU'RE MISSING SOMETHING."
            });
        } else {
            emailjs.send(
                'service_m4fnzre',
                'template_ky3xe8m',
                templateParams,
                'ojPd6vTj_zjiAyBg-'
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.setState({
                    status: 'SENT!',
                    name: '',
                    nameColor: '',
                    email: '',
                    emailColor: '',
                    message: '',
                    messageColor: ''
                });
            }, (err) => {
                console.log('FAILED...', err);
                this.setState({
                    status: 'FAILED TO SEND.'
                });
            });
        }
    }

    colorChange = (e) => {
        const name = e.target.name;
        const target = `${name}Color`;
        if(e.target.value === ''){
            this.setState({
                [target]: 'red'
            });
        } else {
            this.setState({
                [target]: ''
            });
        }
    }

    render() {
        return (
            <div id='contact' className='contact-container'>
                <div className='contact'>
                    <div className='contact-contents'>
                        <h1 className='contact-title'>Get In Touch</h1>
                        <div>
                            <form className='form-alignment' action="" onSubmit={this.handleSubmit}>
                                <input
                                    className='input-text'
                                    style={{ borderColor: this.state.nameColor }}
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    name='name'
                                    type="text"
                                    placeholder='Name'
                                />
                                <input
                                    className='input-text'
                                    style={{ borderColor: this.state.emailColor }}
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    name='email'
                                    type="email"
                                    placeholder='Email'
                                />
                                <textarea
                                    placeholder='Message'
                                    style={{ borderColor: this.state.messageColor }}
                                    onChange={this.handleChange}
                                    value={this.state.message}
                                    name='message'
                                    className='input-type'
                                    rows="4"
                                    cols="50"
                                />
                                <button className='form-button'>SUBMIT</button>
                                <h3 className='status' style={ this.state.status === 'SENT!' ? { color: '#4072FF' } : { color: 'red' }}>
                                    {this.state.status}
                                </h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
