export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=aCL1Z3KkL2mtx6gecOmkLXL0hode5B1T`;
    const res = await fetch(url)
    const { data } = await res.json();

    const gif = data.map(({id, title, images}) => {
        return {
            id: id,
            title: title,
            url: images?.downsized_medium.url
        }
    })
    return gif;
}