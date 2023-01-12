import React,{useState}from 'react';
import data from './Data';
import Person from './Person';

function People() {
    const [list, setList] = useState(data)
  return (
 <main>
    <section className='section'>
        <h1>{`${list.length}  People viewed this list`}</h1>
        
   {
       list.map((personList)=>{
           return(
               <div key={personList.id} className= "people">
                <Person personList ={personList}></Person>

            </div>
        )
    })
}
    </section>
 </main>
  )
}

export default People
