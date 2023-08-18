import React from 'react'

export default function DisconnectHome() {
    return (
        <>
            <div className=' bg-[url("https://cdn.pixabay.com/photo/2019/06/18/19/05/horse-4283016_1280.jpg")]  bg-cover bg-center w-full h-[50vh]  flex justify-center flex-col items-center relative shadow-sm rounded-md  '>
                <h1 className='self-center whitespace-nowrap text-4xl font-semibold text-white shadow-xs' style={{ textShadow: "3px 2px 0px rgb(0 0 0)" }}>Stable Mate</h1>

                <div className='hidden flex-wrap text-sm w-full top-[55vh] md:flex justify-center space-x-4 items-center  absolute'>

                    <div className='bg-[#ffffff] p-6 shadow-md rounded-md  w-[25vw] h-[40vh]'>
                        <h2>Rejoignez la communauté dès maintenant !</h2>
                        <p>
                            Découvrez des opportunités incroyables et connectez-vous avec des personnes partageant les mêmes intérêts. Ne laissez pas passer cette chance !
                        </p>
                    </div>
                    <div className='bg-[#ffffff] p-6 shadow-md rounded-md  w-[25vw] h-[40vh]'>
                        <h2>Inscrivez-vous et rejoignez-nous dès aujourd&aposhui !
                        </h2>
                        <p>Plongez dans un monde passionnant de partage de connaissances, d&aposexpériences inspirantes et d&aposamitiés durables. L&aposaventure commence ici !
                        </p>
                    </div>
                    <div className='bg-[#ffffff] p-6 shadow-md rounded-md  w-[25vw] h-[40vh]'>
                        <h2>Prêt à nous rejoindre ? Inscrivez-vous maintenant !
                        </h2>
                        <p>Explorez un univers de possibilités où vous pouvez élargir vos horizons, rencontrer des esprits brillants et créer des souvenirs inoubliables.
                        </p>
                    </div>
                </div>

            </div>
            <div className='bg-[#78ABF4] absolute -z-50 inset-x-0 top-0 w-[100vw] h-[80vh]'>
                Connecter vous !
            </div>
        </>
    )
}
