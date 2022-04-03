

export const Like = () => {
    return <div className="likes-container">
        <Categories />
        <div className="likes">
            <h2>WATCH LATER</h2>
            <div className="card-container">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    </div>
}