export const getGifs = async( category ) => {
    
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=t5NhMqmLWi7nYwF2xLC36tutGL2ys637&q=${category}&limit=5`);
    const { data } = await res.json();
    const gifs = data.map(img => ({
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        )
    );
    return gifs;
};
