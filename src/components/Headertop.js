import React from 'react'
import logo from './background.png'
import imgurl from './imgurlogo.png'
import './Headertop.css'
import Auth from './Auth'
import ImageDisplay from './ImageDisplay'
import Posts from './Posts'
import './ImageDisplay.css'
import 'antd/dist/antd.css';

export class HeaderTop extends React.Component {
    render() {
        return (
            <div>
                <div className='Header_1'>
                <img src={logo} alt='check' width='100%'/>
                </div>
                <button className='sub1'><a className='set' href='https://imgur.com/'><img className='sub2' src={imgurl} alt='check' width='100%' height='60px;' /></a></button>             
                 <Posts />           
                    <input type='search' className='search' placeholder='images,#tags,@username' name='images'/>
                    <button className='search_button'> 
                    <img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png' alt='search' width='15px' height='15px'/>
                    </button>
                
                <div className='right_side'>
                   <div> <button className='support'><a href='https://imgur.com/emerald'>Support Imgur</a></button></div>
                    <Auth />
                </div>
            <ImageDisplay />
            </div>
        )
    }
}

export default HeaderTop
