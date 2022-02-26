import { FiLink } from 'react-icons/fi'
import React from 'react'
import Menu from '../../components/Menu'
import ModalLink from '../../components/Modal'
import { useState } from 'react'

import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'
import {Container} from './style'

export default function Home() {

    const [link, setLink] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({})


    async function handleShortLink() {
        

        try {
            const res = await api.post('shorten', {
                long_url: link
            })

            setData(res.data)
            setShowModal(true)
            saveLink('@encurta', res.data)
            setLink('')

        } catch (err) {
            console.log(err)
            setLink('')
        }
    }


    return (
        <>
            <Menu />
            
                <div className="logo">
                    Logo
            </div>

            <Container>
            <h1>Short Links</h1>
                <h4>Put your link here for to short</h4>

                <div className="inputs">
                    <FiLink size={24} color="#222" />
                    <input
                        placeholder="Put your link here"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                    <button onClick={handleShortLink}>Short Links</button>

                </div>
          

            {showModal && (
                <ModalLink
                    closeModal={() => setShowModal(false)}
                    content={data}
                />

            )}
            </Container>
                

        </>
    )
}