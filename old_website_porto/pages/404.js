import Link from 'next/link'

const FourOFour = () =>{

    return (
        <>
        <head>
            <title>This page does not exist</title>
        </head>
        <h1>THIS PAGE DOES NOT EXIST</h1>
        <p>Please go to a another page</p>
        <Link href="/">
            <a>
             Click here to go Home
             </a>
        </Link>
        </>
    )
}


export default FourOFour