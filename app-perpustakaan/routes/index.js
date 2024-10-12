var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //   res.render('home', { title: 'Express', layout:'main' });
  const buku =[
      { 
          buku: "Si Kancil",
          cerita: "Tentang si kancil pintar dan baijak"  
          
      },
      {
          buku: "Anak Durhaka",
          cerita: "Maling kundang si anak durhaka"
      },
      {
          buku: "Putri Duyung",
          cerita: "Putri duyung yang menyasar ke daratan"
      }
  ];
  res.render('home',{title: 'halaman home',buku, layout:'main'});
  });

router.get('/about' , function(req, res, next) {
  res.render('about',{title: 'halaman about', layout:'main'});
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'halaman contact', layout: 'main' });
});



module.exports = router;
