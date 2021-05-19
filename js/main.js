$(function () {
   function cssShadow({
      font_size,
      offset_x,
      offset_y,
      blur,
      opacity,
      color,
      rgba
   }){
   let cssStyles = `${offset_x}px ${offset_y}px ${blur}px ${rgba}`;
   $('.header').css('text-shadow', cssStyles);
   $('#resultHex')
      .val(`background-color:${color}
opacity:${opacity}
font-size:${font_size}px`)
   $('#resultRGBA')
         .val(`text-shadow: ${offset_x}px ${offset_y}px ${blur}px ${rgba};
font-size: ${font_size}px;`)
   };
   
   cssShadow({
      font_size: 40,
      offset_x: 4,
      offset_y: -1,
      blur: 0,
      opacity: 1,
      color: '#7d7d7d',
      rgba: 'rgba(125,125,125,1)'
   });

   $(document).on('input change', 'input', function () {
      let font_size=$('#font-size').val();
      let offset_x=$('#offset-x').val();
      let offset_y=$('#offset-y').val();
      let blur=$('#blur').val();
      let opacity=$('#opacity').val();
      let color = $('input[type="color"]').val();

      let redHex = `${color[1]}${color[2]}`;
      let greenHex = `${color[3]}${color[4]}`;
      let blueHex = `${color[5]}${color[6]}`;
      let redDec = parseInt(redHex, 16);
      let greenDec = parseInt(greenHex, 16);
      let blueDec = parseInt(blueHex, 16);
      let rgba=`rgba(${redDec},${greenDec},${blueDec},${opacity})`;

      $('.header').css('fontSize', `${font_size}px`);
      cssShadow({
      font_size,
      offset_x,
      offset_y,
      blur,
      opacity,
      color,
      rgba
      })
   })
})