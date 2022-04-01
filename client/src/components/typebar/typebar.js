import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {ListGroup} from 'react-bootstrap'
import {Context} from '../../index'

const TypeBar = observer (() => {
    const {certificate} = useContext(Context)
    return (

        <ListGroup>
            {certificate.category.map(category => 
                <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    onClick={() => certificate.setSelectedCategory(category)}
                    key={category.id}>
                    {category.name}
                </ListGroup.Item>)}
        </ListGroup>
  )
})

export default TypeBar