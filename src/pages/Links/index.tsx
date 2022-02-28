import React from 'react'
import { useState, useEffect } from 'react'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {Container} from './style'


import { getLinksSave, deleteLink } from '../../services/storeLinks'
import Modal from '../../components/Modal'

const Links = () => {

    const [myLinks, setMyLinks] = useState([])
    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {

        async function getLinks() {
            const result = await getLinksSave('@encurta')

            if (result.length === 0) {
                console.log('lista vazia')
            }

            setMyLinks(result)
        }
        getLinks()

    }, [])

    function handleOpenLink() {
        setData(myLinks)
        setShowModal(true)
    }

    async function handleDelete(id) {
        const result = await deleteLink(myLinks, id)

        if (result.length === 0) {
            console.log('Você não tem links')
        }
        setMyLinks(result)
    }

    return (

        <>
          
                <Container>
                <Link to="/">
                    <FiArrowLeft size={38} color="#222" />
                </Link>

                <h1>Meus Links</h1>

                {myLinks.map(link => (
                    <div key={link.id}>
                        <button onClick={() => handleOpenLink(link.id)}> <FiLink size={25} color="#222" /> {link.long_url} </button>
                        <button onClick={() => handleDelete(link.id)}><FiTrash size={25} color="#222" /></button>
                    </div>
                ))}

                {showModal && (
                    <Modal
                        closeModal={() => setShowModal(false)}
                        content={data}
                    />
                )}
                </Container>
                

           

        </>
    )
}

export default Links