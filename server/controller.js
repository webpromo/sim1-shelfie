
let products = [];
let id=0;

module.exports = {
    read: ( req, res ) => {  /// HAS BUGS
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => {
            res.status(500).send({errorMessage: "It's not you, it's us."});
        })
    },
    create: ( req, res ) => {   // BUGS
      const { name, price, img } = req.body;
      let product = {
        name: name,
        price: price,
        img: img
      }
      // this is where to use massive using db instance
      products.push( product );
      id++;
      res.status(200).send( products );
    } 
} 