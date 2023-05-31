
//this is api route and will be api/contact

function handler(req, res) {
    //if request is post we do this else nothing right now
    if (req.method === 'POST') {
        // body parsed he milti hy next so just take out values jo ap body main send kar rhay hain while making request
      const { email, name, message } = req.body;
        
      //backend py b validation chedk karlo koe input b faulty ho body main to status dedengy 422 k fail hy valid nae hy input
      if (
        !email ||
        !email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !message ||
        message.trim() === ''
      ) {
        res.status(422).json({ message: 'Invalid input.' });
        return;
      }
  
      // Store it in a database
      const newMessage = {
        email,
        name,
        message,
      };
  
      console.log(newMessage);
  
      res
        .status(201)
        .json({ message: 'Successfully stored message!', datamessage: newMessage });
    }
  }
  
  export default handler;