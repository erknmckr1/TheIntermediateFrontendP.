const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");

const Messages = require("./lib/Messages");

app.use(cors());

app.get("/", (req, res) => {
	res.end("Merhaba Socket.IO");
});

	//Bır kullanıcı baglandıgında asagıdaki olay gerceklesır. 
io.on("connection", (socket) => {
	console.log("a user connected");
	// bağlantı sağlandıgı anda mesajların tamamı alıyor ve message-list kanalına gönderiliyor. 
	Messages.list((data) => {
		console.log(data);
		socket.emit("message-list", data);
	});

	// clientten gelen mesajlar "new-message" olayı ıle karsılanacak yani kullanıcı mesaj gonderdıgınde bu olay gerçeklesecek.
	socket.on("new-message", (message) => {  
		console.log(message);
		Messages.upsert({ message }); // backende yolladıgımız message nesnesını verı tabanına attık. 

		//mesajı dıger kullanıcılara yayınlayabılmek ıcın broadcast nesnesını kullandık. Clientten receive-message kanalını dınlememız lazım. 
		socket.broadcast.emit("receive-message", message); 
	});

	// bir kullanıcının baglantısı kesıldıgınde bu olay gerceklesır.
	socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(process.env.PORT || "3000", () => {
	console.log("listening on *:3000");
});
