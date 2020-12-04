open server on 3000, ( npm run start )
open client ( npm run start ) -> choose port 3001

at client, you will have 2 options, to login and logout.
then depending on what u did -> you will have an option to make api calls,
those api calls will be guarded depending on if you are authorazed or not.

u got 3 routes: 
- for everybody
- for not authorized ( not logged in ) 
- for logged in ( private )

click login logout to play with the api calls.

the register, will add to users another user. 
this is where you want to put in a db.

in server, u got 2 options, using cors() package, means you will have manually to add domains that can access this server.
other option is manually add headers.
