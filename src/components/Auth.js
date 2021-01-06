import React from 'react'
import ls from 'local-storage'
import { Modal, Button } from 'antd'
import input_data from './data'
import 'antd/dist/antd.css';
import './Auth.css'

//Main class 
export class Auth extends React.Component {
    //State is defined
    state={
        email:"",
        password:"",
        username:"",
        repassword:"",
        showIn:false,
        showUp:false
    }
    //Helper Methods
    showModal=()=>{
        this.setState({
            showUp:true
        })
    }
    seeModal=()=>{
        this.setState({
            showIn:true
        })
    }
    handleOk=()=>{
        this.setState({
            showIn:false,
            showUp:false
        })
       
    }
    componentWillMount(){
        let data=ls.get("userdata")
        if(!data){
          ls.set("userdata",JSON.stringify(input_data)) 
        }
       
      }
    
    handleCancel=()=>{
        this.setState({
            showIn:false,
            showUp:false
        })
    }
    shift=()=>{
        let email_found;
        let data=JSON.parse(ls.get("userdata"))
       for(let i=0;i<data.length;i++){
       if(data[i].email==this.state.email){
          email_found=this.state.email
          if(data[i].password==this.state.password){
            alert("signed in successfully")
            break
          }else{
            alert("incorrect password")
            break
          }
       }
     }
     if(!email_found){
       alert("SignUp to login")
     }
     this.setState({show_signin:false,email:"",password:""}) 
   }
    
    fit=()=>{
       
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(this.state.email)){
                alert( 'invalid email!');
                return;
            }
            if(!this.state.email.length || !this.state.password.length){ //0 - false any - true
                alert('Please enter email and password!');
                return;
            }
            let data=ls.get("userdata")
            data=JSON.parse(data)
            data.push({"email":this.state.email,"password":this.state.password})
            data=JSON.stringify(data)
            ls.set("userdata",data)
            if(ls.set("userdata",data)){
                alert("Sign up is sucessfull")
            }
            this.setState({
              showUp:false,
              email:"",
              password:""
            })
            //alert("Hurray!Sign Up sucessfull")
          
    }
    handleChange=(e,name)=>{
        let state_copy={}
          state_copy[`${name}`]=e.target.value
          this.setState(state_copy)
          console.log(this.state)
      }
     
    render() {
        return (
            <div>
                 <Button type="primary" className='signin' onClick={this.seeModal}>
        Signin
      </Button>
      <Modal title='SIGN IN' visible={this.state.showIn} onOk={this.handleOk} onCancel={this.handleCancel}>
      <form>
       <input type='email' className='email'onChange={(e)=>{this.handleChange(e,"email")}} placeholder='Email' width='50px'/><br></br><br></br>
       <input type='password' className='password' onChange={(e)=>{this.handleChange(e,"password")}} placeholder='Password'/><br></br><br></br>
       <button onClick={this.shift} className='button'>Login</button>
       </form>
      </Modal>
      <Button type="primary" className='signup' onClick={this.showModal}>
        Sign Up
      </Button>
      <Modal title='SIGN UP' visible={this.state.showUp} onOk={this.handleOk} onCancel={this.handleCancel}>
      <input type='text' className='userName' value={this.state.username} onChange={(e)=>{this.handleChange(e,"username")}} placeholder='Username' width='50px'/><br></br><br></br>
       <input type='email' className='email' value={this.state.email} onChange={(e)=>{this.handleChange(e,"email")}} placeholder='Email' width='50px'/><br></br><br></br>
       <input type='password' className='password' value={this.state.password} onChange={(e)=>{this.handleChange(e,"password")}} placeholder='Password'/><br></br><br></br>
       <input type='password' className='repassword' value={this.state.repassword} onChange={(e)=>{this.handleChange(e,"repassword")}} placeholder='Re-enter Password'/><br></br><br></br>
       <button onClick={this.fit} className='button'>Sign Up</button>
      </Modal>
            </div>
        )
    }
}

export default Auth
