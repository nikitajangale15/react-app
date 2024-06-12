import React from 'react'
// import { userConsumer } from './userContext'
import { userContext } from '../../App'
import { useContext } from 'react'
function ComponentC() {
    const consumer= useContext(userContext)
    return (
        <div>
            <p>useContext simplifies the consumption of context i.e React.createContext.Consumer=== useContext</p>
            <userContext.Consumer>

                {
                    userName => {
                        return <div>Hello {userName}</div>
                    }

                }
            </userContext.Consumer>

        </div>
    )
}

export default ComponentC