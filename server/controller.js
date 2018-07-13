

module.exports = {
    read: ( req, res ) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => {
            res.status(500).send({errorMessage: "It's not you, it's us."});
        })
    },
    create: ( req, res ) => {
      const { name, price, img } = req.body;
      let product = {
        name: name,
        price: price,
        img: img
      }
      products.push( product );
      id++;
      res.status(200).send( products );
    } 
} 