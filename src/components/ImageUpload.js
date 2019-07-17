
import React from 'react';
import axios from 'axios';

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: '', fromData:null};
    }
  
    _handleSubmit=(e)=> {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      var newForm = new FormData(e.target);
      var date = "";
      var time = "";
     // console.log(newForm);
      newForm.append(date,"");
      newForm.append(time,"");
      console.log(newForm);
    //   for (var value of newForm.values()) {
    //     console.log(value); 
    //  }
     axios.post(`http://localhost:8000/upload`, {newForm}).then(res => {
       console.log(res);
       console.log(res.data);
     })
    }
  
    _handleImageChange(e) {
      e.preventDefault();
    
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
       
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div>
            <form  onSubmit={this._handleSubmit}>
              <label>
              Image upload
              <input type="file" name="image" onChange={(e)=>this._handleImageChange(e)} />
              </label>
              <label >
              Name
              <input id="name" type="text" name="name"  />
              </label>
              <label>
                  Select Categories
              <select name ="Category">
                  <option value="Cat">Cats</option>
                  <option value="Dog">Dogs</option>
                  <option selected value="bird">Birds</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Other">Others</option>
              </select>
              </label>
            <label>
            Description
            <textarea type="text" name="description"  />
            </label>
             <input type="submit" value="Submit" />
            </form>
            <div className="imgPreview">
             {$imagePreview}
           </div>
        </div>
      )
    }
  }
    
  export default ImageUpload;