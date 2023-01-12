import React from 'react'

const Person = ({personList}) => {
    const {name,age,img} = personList;
  return (
    <article className='person '>
      

        <img src={img}  alt ={name}/>

      <div>

        <h2>{name}</h2>
        <p>{age} Years</p>
      </div>
    </article>
  )
}

export default Person
