const youtubeVideos = {
    video1: 'https://www.youtube.com/embed/MJk_H3I31Ws?si=JS2DSqSi3gKSKgwd',
    video2: 'https://www.youtube.com/embed/1gPoN44XB_o?si=xH98SPifMQgEpO4G',
    video3: 'https://www.youtube.com/embed/FFHQbGyVAgI?si=OBq5Tk0bO9_JglK7',
    video4: 'https://www.youtube.com/embed/XCtZlutVe28?si=Vx6n1-wU3WjYtk9M',
    video5: 'https://www.youtube.com/embed/20QlbJhAfAM?si=ExLPDP7o4BGnoBu0',
    video6: 'https://www.youtube.com/embed/M9xEa4pC4yg?si=LRrAaEeYizZfQPoP',
};

const YouTubeGallery = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-lc galada-regular tracking-wider">
                <i className="fa-solid fa-video mr-3 text-2xl md:text-3xl"></i>Video Gallery
            </h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(youtubeVideos).map(([key, url]) => (
                    <div key={key} className="overflow-hidden rounded-lg border p-2 shadow-lg bg-white">
                        <div className="aspect-w-16 aspect-h-8">
                            <iframe
                                className="w-full h-[300px] rounded-lg"
                                src={url}
                                title={`YouTube video ${key}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTubeGallery;
