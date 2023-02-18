function BackgroundRandomColor() {
    let BgColor = [];
    for (let i = 0; i < 3; i++) {
      BgColor.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + BgColor.join(', ') + ')';
  } 
