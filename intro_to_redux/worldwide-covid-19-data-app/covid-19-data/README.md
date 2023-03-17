# COVİD 19 DATA APP 

React, redux/toolkit, bootstrap ve chartjs kullanarak apiden ülkelere göre covid-19 verilerini çekip kart olarak listeledik ve chart üzerinde gösterdik. 

- Neden Redux Thunk Kullanırız ? ?? ? ? ? ? ? 

- ## Middleware nedir ? 
Middleware, birbirleri ile iletişim halindeki uygulamalar arasında, tekrar eden görevleri gerçekleştirmek amacıyla yer alan ara yazılımlardır. Tek baslarına bır ıslem gerceklestırmezler iki farklı bılesen arasında kı ıletısımı sağlamak ve duzenlemek ıcın kullanılan bır ara katmandır. Genellikle bir web uygulamasındaki HTTP istekleri ve yanıtları arasındaki işlemleri ele almak için kullanılır.

Örnek olarak, bir kullanıcının bir web uygulamasında bir sayfayı talep etmesi durumunu ele alalım. Kullanıcının talebi, bir HTTP isteği olarak sunucuya gönderilir. Sunucu, bu isteği alır ve bir dizi middleware işlevi kullanarak isteği doğru şekilde işler ve yanıtı oluşturur.

İlk olarak, gelen isteğin doğru şekilde işlenmesi için bir middleware işlevi kullanılabilir. Bu middleware işlevi, isteğin URL'sini kontrol eder ve isteğin hangi sayfaya yönlendirilmesi gerektiğini belirler. Örneğin, /home URL'si için ana sayfa şablonu çağrılabilir.

Daha sonra, isteğin doğru şekilde işlenmesi için bir başka middleware işlevi kullanılabilir. Bu middleware işlevi, istek gövdesindeki verileri kontrol eder ve herhangi bir doğrulama hatası varsa uygun bir HTTP yanıtı döndürür.

Son olarak, yanıtın doğru şekilde oluşturulması için bir middleware işlevi kullanılabilir. Bu middleware işlevi, yanıtın formatını ve içeriğini belirler ve istemciye gönderilmeden önce gerekli düzenlemeleri yapar.

Bu şekilde, bir dizi middleware işlevi kullanarak, bir web uygulamasındaki HTTP isteklerinin doğru şekilde işlenmesi ve yanıtının oluşturulması sağlanabilir.

Eğer bir HTTP isteği yanlışsa veya hatalıysa, sunucu tarafında bu isteği işleyen middleware işlevleri, hatayı yakalayabilir ve uygun bir HTTP yanıtı döndürebilir. Örneğin, kullanıcının erişim izni olmayan bir sayfaya erişmek istediği durumlarda, sunucu tarafındaki bir middleware işlevi, kullanıcının bu sayfaya erişim izninin olmadığını belirleyerek uygun bir HTTP yanıtı döndürebilir.

Aynı şekilde, istek yanlış formatta veya eksik verilerle gönderildiğinde de sunucu tarafındaki bir middleware işlevi, bu hatayı yakalayabilir ve uygun bir HTTP yanıtı döndürebilir. Bu sayede, isteğin doğru şekilde işlenmesi için gerekli verilerin eksikliği veya yanlış formatı nedeniyle oluşabilecek hatalar engellenebilir ve kullanıcıya uygun bir yanıt gönderilebilir.

- Redux middleware 
Middleware, Redux gibi veri yönetim kütüphanelerinde de önemli bir rol oynar. Redux, uygulama durumunu yönetmek için bir dizi reducer fonksiyonu kullanır. Ancak, bazen uygulamanın durumunu değiştiren işlemler, sadece reducer fonksiyonları ile yönetilemeyebilir. Bu gibi durumlarda, Redux middleware kullanılarak ek işlemler gerçekleştirilebilir.

Örneğin, bir Redux uygulamasında, bir kullanıcının bir formu doldurup gönderdiği durumlar düşünülebilir. Bu form verileri, kullanıcının girdiği verileri içeren bir nesne olarak Redux durumunda saklanabilir. Ancak, bu verilerin sunucuya gönderilmesi ve sunucudan gelen yanıtın işlenmesi işlemleri, yalnızca Redux reducer fonksiyonları ile yönetilemez. Bu gibi durumlarda Redux middleware kullanarak, sunucuyla iletişim kurma gibi ek işlemler gerçekleştirilebilir.

Bir diğer örnek olarak, Redux uygulamasında bir kullanıcının giriş yapması düşünülebilir. Kullanıcının giriş yapması durumunda, Redux durumunda kullanıcının kimliği ve erişim anahtarları gibi veriler saklanabilir. Ancak, bu verilerin güvenli bir şekilde saklanması ve doğru şekilde kullanılması için ek işlemler gerekebilir. Bu işlemler, Redux middleware kullanılarak gerçekleştirilebilir.

Özetle, Redux middleware kullanarak, Redux durumunu değiştiren işlemler dışında ek işlemler gerçekleştirilebilir. Bu sayede, uygulamanın işlevselliği artırılabilir ve daha esnek bir yapı oluşturulabilir.

## async await yapısı 

Bu yapı sayesinde, asenkron işlemleri daha okunaklı ve daha kolay anlaşılabilir bir şekilde yazabiliriz.

Asenkron fonksiyonlar, JavaScript'te bir işlem tamamlanmadan diğer işlemlere devam edebilen fonksiyonlardır. Bu sayede, özellikle ağ istekleri gibi zaman alıcı işlemlerde, uygulamanın donması veya beklemesi önlenir.

Async/await yapısı ise, asenkron fonksiyonları daha kolay ve okunaklı bir şekilde yazmamızı sağlar. Async, bir fonksiyonun asenkron olduğunu belirtmek için kullanılır ve bu fonksiyonun içinde await anahtar kelimesi ile beklenen bir değer dönen asenkron bir işlem çağrılabilir. Await anahtar kelimesi, işlemin tamamlanmasını bekler ve sonucu döndürür.



export const getCountries = createAsyncThunk(
    'covidInfo/getCountries',async()=>{
       try{
        const res = await axios('https://api.covid19api.com/countries')
        return res.data
       }catch(error){
        return console.log(error)
       }
    }
)

createAsyncThunk ıle getCountries adında bır actıon olusturduk. action da asenkron olarak bır get ıstegı yapıyoruz. İşlem sonuclandıgında res.data json degerını donuyoruz. İstek basarız oldugunda catch blogu calısır. 


## useRef() hook 

genellıkle dom daki node'lara elementlere ulasmak ıcın kullanılır. Dom'da bır elemente ulasırız ve uzerınde degısıklıkler yaparız. 


## Fontawesome Kurulum

npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
npm install --save @fortawesome/free-brands-svg-icons

