'use client'
import style from './download.module.css'
import { useRouter } from 'next/navigation';


const DownloadButtons = () => {

    const router = useRouter()

    const qrSizes = [
        { label: 'Pequeño', file: 'qr-small.jpg' },
        { label: 'Mediano', file: 'qr-medium.jpg' },
        { label: 'Grande', file: 'qr-large.jpg' },
    ];

    return (
        <div className={style.qrSection}>

            <div className={style.mainQr}>
                <img src="qr-small.jpg" alt="qr" className={style.qrImage} />
            </div>

            <div className={style.buttonContainer}>
                {qrSizes.map(({ label, file }) => (
                    <a
                        key={file}
                        href={`/${file}`}
                        download={file}
                        className={style.downLink}
                    >
                        Descargar QR {label}
                    </a>
                ))}

                <button onClick={() => router.push("/")} className={style.downLink}>
                    Volver al inicio
                </button>

            </div>
        </div>
    );
};

export default DownloadButtons;



