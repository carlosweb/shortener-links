import { FiLink } from 'react-icons/fi'
import React from 'react'
import Menu from '../../components/Menu'
import ModalLink from '../../components/Modal'
import { useState } from 'react'

import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'
import { Container, Box } from './style'

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

                <Box>
                    <h1>Short Links</h1>
                    <h4>Put your link here for to short</h4>

                    <div>
                    {/* <FiLink className="iconLink" size={24} color="#222" /> */}
                        <input
                            placeholder="Put your link here"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                    <button className="buttonAction" onClick={handleShortLink}>Short Links</button>
                </Box>



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