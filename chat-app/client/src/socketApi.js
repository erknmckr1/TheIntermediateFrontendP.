import io from "socket.io-client";

let socket;
// Burada client ile bacend kısmını baglayacagız

// gereklı baglantıgı saglayacak fonksıyon
export const init = () => {
  console.log("Connecting...");
  socket = io("http://localhost:3000", {
    // backendın oldugu local hostu verdık

    transports: ["websocket"],
  });

  // baglantı saglandıgında calısacak fonksıyon
  socket.on("connect", () => console.log("Connected!"));
};

// Backend e mesajın ıletılmesı...
export const sendMessage = (message) => {
  // eğer message parametresının socket tanımı varsa parametreyı new-message kanalına ıletecek. Formdan mesajı alalım...
  if (socket) socket.emit("new-message", message);
};


  // Asagıdaki fonksıyon ıle ılk etabta socket degıskenının tanımlı olup olmadıgını kontrol ettık. Daha sonra 'socket.on' metodunu kullanarak 'socket nesnesınde olay dınleyıcısı olusturduk. Dınlenen olay 'receive-message' ve bu olay tetıklendıgınde  'subsMessage' içindeki callback(cb) fonksıyonu çağrılır.Bu olay baska bır kullanıcıya mesaj gonderıldıgınde gerceklesır. 
export const subsMessage = (cb) => {
  if (!socket) return;

  socket.on("receive-message", (message) => {
    console.log("Yenı bır mesajınız var.",{message});
    cb(message)
  });

};


export const subsInıtıalMessage = (cb) => {
	if (!socket) return;

	socket.on("message-list", (messages) => {
		console.log("Initial", messages);
		cb(messages);
	});
};
