import React from 'react';
import {LikeOutlined,CommentOutlined,EyeOutlined } from '@ant-design/icons';

export class ImageDisplay extends React.Component {
    //setting the state
    state={ 
        loading:null,
        url:[],
        description:[],
    }
   //fetching images from api
   mult=async (e)=>{
       let URLS=[...this.state.url]
       let Description=[...this.state.description]
       try{
        const data=await fetch('https://api.unsplash.com/photos/?client_id=TBBU3maeUq1pG8lPH4RudzMd1UUZY8EhPR8QHx0I1vk')
         let info=await data.json()
         console.log(info)
         console.log(info[0].alt_description)
         for(let i in info)
       {
           URLS.push(info[i].urls.raw)
           Description.push(info[i].alt_description)

        }
        console.log(Description)
     //seting again state
       this.setState({
           loading:true,
           url:URLS,
           description:Description
       })
       if(!info) throw "Data not found";
    }catch(e){
          console.log(e)
           }
       }
       //Live compponents
       componentDidMount=()=>{
           this.mult();
       }
    render() {
        return (
            <div id='move'>
             <h1>User Submitted Images</h1>
               <div class="addStyle">
               
               {this.state.loading?this.state.url.map((value,index)=>{return <div><figure><img src={value} className="img"
                key={index} alt='iterate' width='350px' height='350px'/>
                <div className='allData'>
                    <p><LikeOutlined />{index+2}</p>
                    <p><CommentOutlined />{index+3}</p>
                    <p><EyeOutlined />{index+1}</p>
                </div>
                <figcaption className="para"><strong>Fig:{index+1}:{this.state.description[index]}</strong></figcaption></figure>
                </div>}):<p>Press button to see images</p>}
               </div>
            </div>
        )
    }
}

export default ImageDisplay
