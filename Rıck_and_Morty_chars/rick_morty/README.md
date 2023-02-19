## REDUX MIDDLEWARE

Thunk, asenkron işlemleri Redux üzerinden yönetmek için kullanılan bir ara katmandır. Bu yapı, Redux eylemlerini yürütmek ve sonucunu beklemek yerine, eylemler tarafından başlatılan işlemleri Redux'a bildirir ve işlemler tamamlanana kadar bekler.
Thunk yapısı mıddleware denılen adı verilen bir ara katmanın içinde kullanılır. Mıddleware, Redux eylemlerinin gönderildiği ve Redux store'da güncelleme yapılması gerektiğinde çalıstırılan bir fonksıyondur. 

Redux ile asenkron işlemleri yönetmek için bir ara katman...

import {createAsyncThunk } from "@reduxjs/toolkit";

- const getCharacters = createAsyncThunk('characters/getCharacters', async () => {
  const res = await axios(`${process.env.REACT_APP_APİ_BASE_ENDPOINT/characters}`);
  return res.data;
  })

yukarıdaki işlemde characters/getCharacters adında bır asynjThunk tanımladık. Belırtılen URL'den verılerı almak ıcın bır HTTP ıstegı yapıp aldıgı verıyı donduruyor. CreateAsycThunk fonksıyonu ıkı parametre alır. Ilk parametre ıslevın adı ıkıncı parametre yurutulecek async ıslemıdır. AsyncThunk, Redux Toolkit içinde Redux'un normal bir action creator'ından farklı olarak asenkron işlemleri yönetmek için kullanılır.

- extraReducers: (builder) => {
  builder
  .addCase(getCharacters.fulfilled, (state, action) => {
            state.chars=action.payload
          })
      }

extraReducers fonksıyonunda 'addCase fonksıyonu ıle duruma gore işlemler yapılabılır.
getCharacters.fullfield durumu createAsyncThun fonksıyonu ile olusturulan async işlemin basarıyla tamamlanması durumunu ıfade eder.

İşleyiş şeklini detaylandırmak gerekirse:

- getCharacters isimli createAsyncThunk fonksiyonu, async işlemini gerçekleştirir ve tamamlanması durumunda getCharacters.fulfilled durumunu tetikler.
- extraReducers fonksiyonunda addCase fonksiyonu kullanılarak, getCharacters.fulfilled durumu için bir case eklenir.
- getCharacters.fulfilled durumu gerçekleştiğinde, bu case tetiklenir ve state ve action parametreleri alınır.
- state parametresi, Redux store'daki mevcut durumu temsil eder ve bu durum değiştirilebilir. Burada, state.status ve state.characters - alanlarına yeni değerler atanarak, store durumu güncellenir.
- action parametresi, getCharacters.fulfilled durumu tetiklenirken gönderilen verileri içerir. Burada, action.payload değeri, async işlemin tamamlanması sonucu elde edilen karakter verileridir.

Bu şekilde, addCase fonksiyonunda oluşturulan case, getCharacters.fulfilled durumunda gerçekleşen işlemleri tanımlar ve Redux store'daki durumu günceller.



### Dispatch 
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from './rickandmortySlice';

 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);


Redux'ta bır ıslemı gerceklestırmek ıcın dısPatch fonksıyonunu kullanırız. Bu fonksıyon, bir aksiyon objesi alır ve bu objeyı Reducer'a gonderır. Reducer bu objeyı kullanarak State'i gunceller ve yenı state'i dondurur.

yukarıda verdiğimiz kod örneğinde, dispatch(getCharacters()) fonksiyonu, getCharacters isimli bir Redux Action Creator'ı çalıştırır. getCharacters fonksıyonu verılerı cektıkten sonra bu Action Creator bir fulfilled eylemi gönderir. fulfilled eylemi, Redux Toolkit'in extraReducers özelliği kullanılarak yakalanır ve State'i güncellemek için kullanılır. Sonuç olarak, State güncellenir ve Component'lerdeki useSelector fonksiyonları ile güncel verileri alabilirsiniz.

Özetle, getCharacters fonksiyonunu Slice dosyasında tanımladığınızda, bu fonksiyon yalnızca bir Action Creator'dur ve yalnızca Redux store'da kullanılmak üzere tasarlanmıştır. Bu fonksiyonu kullanmak için, bir Component'te useDispatch hook'unu kullanarak bu Action Creator'ı tetiklemeniz gerekir. Bu işlem, asenkron işlemleri gerçekleştirecektir ve güncellenmiş state, Component'lere useSelector hook'u ile aktarılacaktır.

## NOT CHARS DIZISI NEDEN SUREKLI  BOS DÖNDÜ ? 

useEffect(() => {
     
      dispatch(getCharacters());
    
  }, [dispatch]);

ılk etapta dıspatch ıslemını bu sekılde vermıstım fakat sureklı hataya sebep oldu. Sayfa yenılendıgınde getCharacters fonksıyonu tekrar cagırılmadıgından 'state' içerisindeki chars dizisi bos kalıyordu. Bu nedenle undefıned oluyordu. Bu hatayı gıdermek ıcın getCharacters() fonksıyonunu her sayfa yenılendıgınde cagırmak yerınde, ılk render işlemi sırasında 'chars' dızısı bos olsa dahi getCharacters fonksıyonunu çağırarak çözdüm. 

useEffect(() => {
    if (characters.length === 0) {
      dispatch(getCharacters());
    }
  }, [dispatch, characters]);

Sayfa yenılendıgınde componentler tekrar render edılılır, ancak bu, sayfanın tamamen yenıden yuklenmesı anlamına gelmez. Bu nedenşe, useEffect ıcındeki dispatch fonksıyonu yalnızca bileşenin ilk yüklenmesi sırasında cagırılır. Sayfa yenılendıgınde komponent hala var oldugu ıcın komponent tekrar render edılır ve bu state'imizdeki verilerin korunmasını sağlar. Sayfa yenılendıgınde tekrardam verı almak ıstıyorsaki ya bır on bellege ıhtıyacımız var yada sayfa yenılendıgınde getCharacters fonksıyonunu tekraradan cagıracagız. 

Bir bileşenin yeniden render edilmesi, bileşenin state veya props'larında bir değişiklik olduğunda gerçekleşir. Ancak bileşenin sayfa yenilendiğinde yeniden render edilmesi, bileşenin state veya props'larında değişiklik olmasa bile gerçekleşebilir.

Bir sayfa yenilendiğinde, bileşenin state veya props'larında bir değişiklik olmadığı halde bile yeniden render edilmesinin sebebi, React'in bileşenlerin yaşam döngüsüne uygun olarak çalışmasıdır. Bileşenler oluşturulduklarında render() fonksiyonu çağrılır ve sonrasında bir state veya props değişikliği olana kadar tekrar çağrılmazlar. Ancak sayfa yenilendiğinde, bileşenler hala var olduğu için React, bileşenlerin yaşam döngüsünün başından tekrar başlatarak bileşenleri yeniden render eder. Bu sayede bileşenlerin, sayfa yenilendiğinde bile güncel verilerle eşleşmeleri sağlanır.

