import React, {Fragment, useContext} from 'react'
import { AppContext } from '../App'

const Context = () => {
    const details = useContext(AppContext);
  return (
    <Fragment>
        {details && (
            <div>
                <h2>Lingauagem: {details.language}</h2>
                <h4>Framework: {details.framework}</h4>
                <h4>Projetos: {details.projects}</h4>
            </div>    
        )}
    </Fragment>
  )
}

export default Context