
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/users/Bass4Nation/repos`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
  }

const Updates = ({ data }) => {
    
    console.log(data)
    console.log("THIS")

    return (
        <>
        <section>
            <h3>Patch notes sent to Github. Push messages</h3>
            {/* {data.payload.map(event =>
                event.commits.map(status => (
                    <p>{status.message}</p>
                )))} */}
        </section>
        </>
    )
}

export default Updates;