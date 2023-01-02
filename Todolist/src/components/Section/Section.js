import React from 'react'
import './section.css'
function Section({ tasks, setTask }) {

    // checkbox ıle  isCompleted degerını degıstırdıgımız fonksıyon onClıck ıcınde parametre olarak index numarası yolladık aşağıdali fonksıyonda ındex numaraları cakısırsa her tıkta isCompleted degerı degısecek.
    const checkClick = (i) => {
        setTask(task => task.map((item, index) => {
            if (index === i) {
                return { ...item, isCompleted: !item.isCompleted }
            }
            return item
        }))
    }
    const onChangeItem = (i,e) =>{
        setTask(task=>task.map((item,index)=>{
            if(i===index){
                return {...item, name:e.target.value}
            }
            return item
            
        }))
    }
    // butona tıkladıgımız zaman asagıda kı dongunde index ile tıkladıgımız elementın ıd sı eslesırse eslesmeyenlerı yenı bır dızıde toplayıp bıze donduruyor. Boylece yenı dızıde tıkladıgımız task olmayacak.
    const deleteItem = (e)=>{
        setTask(task => task.filter((item,index)=> index != e.target.id))
    }
    // ınput focus olmadıgında tetıklenecek olay
    const blurEffect = ()=>{
        setTask(task=>task.map((item)=>{
            return {...item,isEditing:false}
        }))
    }
    // input focus oldugunda tetıklenecek olay aşagıda ki fonksıyonda bir i parametresi verdik bu parametre jsx kodlarımızı yazdıgımız tarafta map dongusunde ki index e karsılık geliyor. setTask ıcınde taskları tek tek donerek i ile indexin eslestigi taskın isEditing özelligini true ya dondurup diğer özellikleri oldugu gibi alıyoruz.
    const focusEffect=(i)=>{
        setTask(task=>task.map((item,index)=>{
            if(index===i){
                return {...item,isEditing:true}
            }
            return {...item,isEditing:false}
            
        }));
    }
    return (
        <section className='main'>
            <ul className='todo-list'>
                {tasks.map((item, index) => (
                    <li key={index} className='d-flex'>
                        <div className='float-start'>
                            <input
                                type="checkbox"
                                onClick={()=>checkClick(index)}
                                checked={item.isCompleted===true}
                                hidden={item.isVisible===false}
                                className='toggle'
                            />
                        </div>
                        <div className='list-item'>
                            <input
                            onChange={(e)=>{onChangeItem(index,e)}}
                            value={item.name}
                            className={(item.isCompleted ? 'view completed' : 'view') + ' ' + (item.isEditing ? 'edit' : '')}
                            hidden={item.isVisible === false}
                            onBlur={(e)=>{blurEffect(index,e)}}
                            onFocus={(e)=>{focusEffect(index,e)}}
                            
                            />
                        </div>
                        <div className='float-end'>
                            <button
                            id={index} onClick={deleteItem}
                            className="destroy m-0"
                            >

                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Section