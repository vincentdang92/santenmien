const { Nuxt, Builder } = require( 'nuxt' );
const app = require( 'express' )();
const http = require( 'http' );
const https = require( 'https' );
const fs = require( 'fs' );
let server;
const isProd = ( process.env.NODE_ENV === 'production' );
const port = process.env.PORT || 3000;
// Prepare for HTTP or HTTPS
if ( process.env.NODE_ENV === 'production' ) {
  const privateKey = fs.readFileSync('/etc/letsencrypt/live/santenmien.nhanhoa.com/privkey.pem', 'utf8');
  const certificate = fs.readFileSync('/etc/letsencrypt/live/santenmien.nhanhoa.com/cert.pem', 'utf8');
  const ca = fs.readFileSync('/etc/letsencrypt/live/santenmien.nhanhoa.com/chain.pem', 'utf8');
  const httpsOptions = {
    key: privateKey,
    cert: certificate,
    ca: ca
  }
  server = https.createServer(httpsOptions, app).listen(443, '103.170.123.109')
  server1 = http.createServer(app).listen(80, '103.170.123.109')
}
// We instantiate nuxt.js with the options
const config = require( './nuxt.config.js' );
config.dev = !isProd;
const nuxt = new Nuxt(config)
// Render every route with Nuxt.js
app.use( nuxt. render);
// Build only in dev mode with hot-reloading
if ( config.dev ) {
  new Builder(nuxt)
  .build()
  .then(()=>{
    http.createServer(app).listen(port, 'localhost');
  })
  .catch(( error) => {
    console.error(error)
    process.exit( 1 )
  })
} 