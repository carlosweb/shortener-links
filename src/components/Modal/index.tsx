import { FiX, FiClipboard } from 'react-icons/fi'
import { ModalBackround, ModalContent } from './style'

export default function Modal({ closeModal, content }) {

    const { link, long_url } = content

    async function copyLink() {
        await navigator.clipboard.writeText(link)
    }

    return (
        <>
            <ModalBackround>
            </ModalBackround>

            <ModalContent role="modal link">
                <h1>Link encurtado</h1>

                <button className="closeButtom" onClick={closeModal}>
                    <FiX size={30} color="#ffffff" />
                </button>
                <div className="contentLink">
                <span>{long_url}</span>
                <button className="copyLink" onClick={copyLink}>
                    {link}
                    <FiClipboard size={28} color="#222" />
                </button>
                </div>
                
            </ModalContent>

        </>
    )
}