const redirects = [
    { from: '/dang-nhap.html', to: 'https://id.nhanhoa.com' },
    { from: '/dang-ky.html', to: 'https://id.nhanhoa.com/register.html' },
    { from: '/quen-mat-khau.html', to: 'https://id.nhanhoa.com/login/forgot.html' },
    
  ]
  
  module.exports = function (req, res, next) {
    const host = req.headers.host;
    const fullUrl = req.url;
    var url = req.url.split('?')[0];
    var urlParams = null;
    if (req.url.includes("?")) {
      urlParams = '?' + req.url.split('?')[1]
    }
    
    const redirect = redirects.find(r => r.from === url)
    if (redirect) {
      var newLocation;
      if (urlParams) {
        newLocation = redirect.to + urlParams;
      } else {
        newLocation = redirect.to;
      }
      res.writeHead(301, {
        Location: newLocation
      });
      res.end()
    } else {
      // let newUrl = fullUrl.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
      // this.$router.push(newUrl)
      if (/\/{2,}/.test(req.url)) {
        let url = req.url.replace(/\/{2,}/g, '/')
        res.writeHead(301, { 'Location': url })
        return res.end()
      }
      if(req.url.endsWith('/') && req.url.length > 2){
        let url = req.url.slice(0, -1)
        res.writeHead(301, { 'Location': url })
        return res.end()
      }
      if(req.url.includes('tin-tuc') && !req.url.includes('.html')){
        let url = req.url + '.html'
        res.writeHead(301, { 'Location': url })
        return res.end()
      }
      
      next()
    }
    
  }