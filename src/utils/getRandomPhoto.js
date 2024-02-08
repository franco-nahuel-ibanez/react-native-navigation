export const getRandomPhoto = () => {
  const photo = [
    'https://i.pinimg.com/474x/c1/78/44/c1784448d3fba14f9e0b6b3caf222711.jpg',
    'https://play-lh.googleusercontent.com/i8fGO7LrghUKcBCijVf09Vy_FET5-tCh35O6FTFjkHUMixnCRokmaKMZOKNvf4k2P3Y',
    'https://img.buzzfeed.com/buzzfeed-static/complex/images/ic7defqune831dh9orwm/memoji-2.png',
    'https://media.stickerswiki.app/memojibyapple3/2290702.512.webp',
    'https://media1.popsugar-assets.com/files/thumbor/qDtwqjvdIP1-DCMpkZcctNz5-ps=/640x480/top/filters:format_auto():quality(85):extract_cover()/2018/09/18/945/n/1922507/87e076fb06b8edb2_IMB_hdR0zT.GIF',
    'https://global.discourse-cdn.com/monzo/original/3X/3/a/3aae66f7a0128dc50c915d2687d1abad85de36f3.jpeg',
    'https://i.pinimg.com/474x/1e/17/20/1e172053bba20cc6ed5a5075195e7239.jpg'
  ]

  return photo[Math.floor(Math.random() * photo.length)]
}