


# react-select-async-paginate -> 
* React-select-async-paginate kütüphanesi, asenkron veri yüklemelerine ve sayfalama özelliklerine sahip bir seçim kutusu sunar. Bu sayede, uygulamanızda büyük veri setleri için seçim kutusu kullanırken veri yükleme performansını arttırabilirsiniz.

## <AsyncPaginate> ->
 React-select-async-paginate kütüphanesinin bir parçasıdır. Async komponentıne benzer sekılde çalışır fakat verileri sayfalama özellikleri sunar 
### loadOptions()
loadOptions prop'u, <AsyncPaginate/> componenti tarafından kullanılan bir fonksiyondur. Bu fonksiyon, kullanıcının seçim yaptığı an yada sayfalama işlemi yaptığı an çağrılır ve sayfalama işlemi için gerekli olan bilgileri (örneğin, sayfa numarası ve sayfadaki veri miktarı) alır. Bu fonksiyon verileri geri döndüren bir Promise veya async/await döndürmelidir(örneğin bir api kaynadıgından veri çektik ve bize dönen response). Bu fonksıyon kullanıcı secım yaptıgı an yada sayfalama ıslemı yaptıgı an calısır. 

Ve geriye dondurdugu verılerın optıons dizisi olması gerekir ki asyncPaginate komponentinin bekledıgı yapıdır. Fetch ıle verı cektıkten sonra options dizisi olusturulmalı ve gerıye dondurulmelıdır. 


## Promise.all 
Promise.all fonksıyonu bırden fazla promısı aynı anda yurutmek ıcın kullanılır. Bu fonksıyon, bir dizi promisi alır ve tüm promislerin tamamlandıgı anda bir resolve fonksıyonu cağırır. Uygulamada 'currentWeather' ve 'forecastWeather' isimli promisleri yolladık. Promise.all fonksıyonuna  gonderılen promisler tamamlandıgı anda then() bloguna gecer burada bızı ıkı promısten donen degerler karsılar (response) bunları  response[0] ve response[1] olarak yenı degıskenlere atarız...

async/await yapısı -> Js de asenkron işlemleri yönetmek için ve asenkron ıslemlerı daha okunaklı bır hale getırmek ıcın tasarlanmıstır. 'async' keywordu bır fonksıyonun asenkron calısacagını belırtır ve fonksıyon calıstıgı anda bır promise dondurur. 'await' keywordu ise promisin resolve yada reject edılmesını beklemek ıcın kullanılır.

 resolve reject -> Bu promise yapısının ıkı onemlı detayı vardır. Resolve ve Reject fonksıyonları resolve() fonksıyonu, bir promis'in başarılı bır sekılde calıstıgını bıldırır ve promise resolve edıldıgı an calısır gerıye dondurdugu deger promise'nin then metodunda kullanılabılır. Reject ise promise basarısız sonuclandıgında calısır ve promisin reject edildigi an gerıye dondurdugu deger promise'nin 'catch' metodunda kullanılır.


 * onChange metodu 
 genellikle bir form elementinde (input ,select vs.) değişiklik oldugunda calısan bir eventhandler'dır. Bu event arama alanına gırdıgımız degerlerı yakalar ve işler.

 * onSearchChange metodu 
 genellıkle arama alanı degıstıgı an da calısan bir eventhandler'dır. (<input type="search"/>) 