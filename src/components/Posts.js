import React from 'react'
import './Posts.css'


export class Posts extends React.Component {
    state={
        image:false,
        loading:null
    }
    change=(e)=>{
        this.setState({
            image:e.target.files,
            loading:null
        })
        console.log(e.target.files)
    }
    uploadImage = async (e) => {
        
        const files = this.state.image
        const data = new FormData()
        // files.map((value,index)=>{
        //     data.append('file', files[index])
        // })
            data.append('file', files[0])
            data.append('upload_preset', 'bnqopkmk')
        //console.log(data)
        const res = await fetch('https://api.cloudinary.com/v1_1/diffcxty8/image/upload',
          {
            method: 'POST',
            body: data
          }
        )
        const file = await res.json()
        console.log(file.secure_url)
        this.setState({
            image:file.secure_url,
            loading:true
        })
    }
    render(){
      return (
        <div className="App">
          <div className='inner'>
          <input id='Choose'
            type="file"
            placeholder="Upload an image"
            onChange={this.change} multiple
          /> 
          <button onClick={this.uploadImage}><img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg" alt="newpost"/>New Post</button>
          </div>
          <div>
                {this.state.loading?<img src={this.state.image} id='get' alt='photos' width='350px' height='350px'/>:<p className='catch'><strong>Please Upload</strong></p>}
                {this.state.loading?<p id='set'><strong>Fig:11:Shows the images of details</strong></p>:null}
            </div>
        </div>
      )
          }
}

export default Posts
