function StudioPolicy ({ content }) {
    return (
        <div className="studio-policy">
            <h1 className="mb-4">Studio Policy</h1>
            <ul>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </ul>
        </div>
    )
}

export default StudioPolicy;