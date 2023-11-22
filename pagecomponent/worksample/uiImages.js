export function ImageData(folderName, imageCounter) {
    const ImageArray = [];
    for (let i = 1; i < imageCounter; i++) {
        ImageArray.push({
            imgSrc: `/assets/workgallary/${folderName}/${i}.jpg`,
        });
    }
    return ImageArray;
}
