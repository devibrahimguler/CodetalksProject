export default function (data) {
    return Object.keys(data)
        .map(key => {
            return {
                id: key,
                ...data[key],
            };
        }).sort(function (a, b) {
            console.log(a._data.time);
            return a._data.time > b._data.time ? -1 : a._data.time > b._data.time ? 1 : 0;
        });;
}