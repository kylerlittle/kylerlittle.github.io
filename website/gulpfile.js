const { src, dest, parallel } = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const cache = require('gulp-cache');

// Compress non JPG images losslessly
function nonJpgImg() {
    return src(['site_content/img-uncompressed/*', '!site_content/img-uncompressed/*.jpg'])
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(dest('site_content/static/img'));
}

// Compress JPG images -- accept lossy since super high quality photos
function jpgImg() {
    return src('site_content/img-uncompressed/*.jpg')
        .pipe(cache(
            imagemin([imageminMozjpeg({
                quality: 50
            })])
        ))
        .pipe(dest('site_content/static/img'));
}

// Default Task
exports.default = parallel(nonJpgImg, jpgImg);