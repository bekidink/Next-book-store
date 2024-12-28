function getImgUrl (name:any) {
    return new URL(`@/assets/books/${name}`, import.meta.url)
}

export {getImgUrl}