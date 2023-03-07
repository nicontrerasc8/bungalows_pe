import React from 'react'
import {motion} from "framer-motion"
import UseCartContext from '../lib/context'

const GoToOxaCorredores = () => {

    const {Language} = UseCartContext()

  return <motion.div
        className='go-to-oxacorredores'
    >
        <h3>{Language.oxaHead}</h3>
        <a href='https://oxacorredores.com/' rel='noreferrer' target={"_blank"}>
            <button className='btn-primary'>
                {Language.oxaBtn}
            </button>
        </a>
    </motion.div>
}

export default GoToOxaCorredores