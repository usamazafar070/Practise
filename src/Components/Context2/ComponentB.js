import React from 'react'
import { data } from './ComponentA'
const ComponentB = () => {
  return (
    <div>
        <data.Consumer>
            {(output) => {
                return (
                    <div>
                        <h1>Component B Name: {output.name}</h1>
                    </div>
                );
            }}
        </data.Consumer>
    </div>
  )
}

export default ComponentB