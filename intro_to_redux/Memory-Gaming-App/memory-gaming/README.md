## Memory Game

![!Uygulama Resmi](./memory%20game.png)

- const shuffleCards = [...cards, ...cards]
spread operator bir dizi veya nesneyi ayrı ayrı öğeler halinde ayırarak yenı bır dızı veya nesne olusuturmak ıcın kullanılır. Bu ornekte spread operatoru ile cards dizisindeki elemanları tek tek alarak ıkı kopya halınde bır dızı olusturduk.

Burada Math.random() - 0.5 ifadesi, iki rastgele sayı (0 ile 1 arasında) üretir ve aradaki farkı hesaplar. Bu değer pozitif, negatif veya sıfır olabilir. Bu değerler, elemanların sıralanma durumunu belirler. Eğer bu değer pozitif ise, birinci eleman ikinci elemanın önünde olacak şekilde yer değiştirir. Eğer bu değer negatif ise, ikinci eleman birinci elemanın önünde olacak şekilde yer değiştirir. Eğer bu değer sıfır ise, elemanlar yer değiştirmeyeceklerdir.

map ile shuffleCards dızısının her bır elemanına erıstık ve spread operator ıle elemanın butun oglerını aldık ve yanına rastgele id ekledık. her elemanın kendıne ozgu id si oldu.

- const shuffleCards = [...cards, ...cards] //\*
  .sort(() => Math.random() - 0.5)
  .map((card) => ({ ...card, id: Math.random() }));

## machedCard creatorunu asagıdakı sekılde kullanarak neden hata aldık ? ? ? ? ? ? ? ?

hata -> CardsSlice.jsx:52 Uncaught TypeError: Cannot perform 'set' on a proxy that has been revoked
at CardsSlice.jsx:52:1

matchedCard: (state) => {

      if (state.chooseFirst && state.chooseSecond) {
        state.isDisabled = true;
        if (state.chooseFirst.src === state.chooseSecond.src) {
          state.point += 50;
          state.cards.map((card) => {
            if (card.src === state.chooseFirst.src) {
              return { ...card, matched: true };
            }
            return card;
          });
           state.chooseFirst = null;
        state.chooseSecond = null;
        state.turn += 1;
        state.isDisabled = false;
        } else {
          state.point -= 10;
          setTimeout(() => {
             state.chooseFirst = null;
        state.chooseSecond = null;
        state.turn += 1;
        state.isDisabled = false;
          }, 1000);
        }
      }
    },


<!-- <div className={`card ${card.matched ? 'matched' : ''}`}>
      <div className={(card===chooseFirst || card===chooseSecond || card.matched) ? "flipp" :""}>
      <img className="frontImg" src={card.src} alt="footballer card" />
      <img onClick={handleClick}  className="coverImg" src="./img/fifa21.png" alt="cover" />
      </div>
    </div> -->

    yukarıda kart komponentınde kartların on ve arka yuzu ust uste gelecek sekılde ayarladık. ve card matched oldugun position ozellıgı verdık. İkinci divde gerekli sartlar saglandıgında gerekli css'leri uygulayarak flip animasyonunu ekledik. Transform ozellıgını Y eksenınde dondurmek ıcın transition ozellıgını ıse anımasyon ve suresını ayarlamak ıcın kullandık. 

 .card .frontImg{
    position: absolute;
    transform: rotateY(90deg);
    transition: all ease-in-out 0.4s;
}

.flipp .frontImg{
    transform: rotateY(0deg) ;
    transition: all ease-in-out 0.4s;
    
}

.card .coverImg {
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
}
.flipp .coverImg{
    transform: rotateY(90deg);
    transition: all ease-in 0.2s;
   
}