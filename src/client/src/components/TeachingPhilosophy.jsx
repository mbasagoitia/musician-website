function TeachingPhilosophy ({ content }) {
    return (
        <div className="teaching-philosophy">
            <h1 className="mb-4">Teaching Philosophy</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
       </div>
       )
}

export default TeachingPhilosophy;