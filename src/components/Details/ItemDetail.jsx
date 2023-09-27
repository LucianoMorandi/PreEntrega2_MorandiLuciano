import React from 'react'
// import Counter from '../Counter/Counter'

const ItemDetail = ({item}) => {
  console.log(item)
  return (
    <div>
        <h5>{item.name}</h5>
        <img src={item.image} alt="" />
        <p>
           Gender: {item.gender}
        </p>
        <p>
            House: {item.house}
        </p>
        <p>
            Birthday: {item.dateOfBirth}
        </p>
        <p>
            Patronus: {item.patronus}
        </p>
        <p>
            Other Names: {item.alternate_names}
        </p>
        {/* <Counter/> */}
    </div>
  )
}

export default ItemDetail