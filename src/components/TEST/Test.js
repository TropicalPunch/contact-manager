import React, { Component } from 'react'

class Test extends Component {

  state= {
    title: '',
    body:''
  };

  //see example for fetch a post : https://jsonplaceholder.typicode.com/

  componentDidMount(){
    
  //see example for fetch structure : https://jsonplaceholder.typicode.com/  ==== /posts/1!!!!
    fetch ('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => 
   // console.log(data)
    this.setState({
      title: data.title,
      body: data.body
    })
    
    );
    
  }
 

/* LIFE CYCLE METHODS EXAMPLES
 componentDidMount(){
   console.log('is mounted');
 }

 componentWillMount(){
  console.log('in mounted');
}

componentDidUpdate(){
  console.log('in mounted');
}

componentWillReceiveProps(nextProps,nextState){
  console.log('in mounted');
}

static getDerivedStateFromProps(nextProps,prevState){
  return {
    test:'somthing'
  };
}

getSnapshotBeforeUpdate(prevProps,prevState){

}

*/

  render() {
    const {title, body} = this.state;
    return (
      <div>
        <h1>{title}  </h1>
        <p>{body}</p>
      </div>
    )
  }
}
export default Test;
