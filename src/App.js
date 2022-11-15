import logo from './logo.svg';
import './App.css';

function Myapp() {
  const hello = ` My Hello World`

  const myHello =  {
    name : "My Hello World Object"
  }

  const name = ['We', 'are', 'United'] 

  let namejoin = "";
  
  name.map((val)=>{
      namejoin += ` ${val}`
  })
  console.log(namejoin)
  const list = [{name: "Hello World One"}, {name: "Hello World Two"}, {name: "Hello World Three"}]

  let [helloworld1 , helloworld2, helloworld3] = list
  console.log(helloworld1.name)
  return (
       <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p className='lists'>
           <ul className='ul'>
           <li>{hello}</li>
           <li>{myHello.name}</li>
           <li>{namejoin}</li>
           <li>{helloworld1.name}</li>
           <li>{helloworld2.name}</li>
           <li>{helloworld3.name}</li>
           </ul>
         </p>
       </header>
     </div>
  )
}
export default Myapp