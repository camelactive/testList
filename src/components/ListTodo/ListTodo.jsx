import { useState } from "react"
import style from "./ListTodo.module.css"
import upPic from "../../images/up.svg"
import downPic from "../../images/down.svg"
import dataExample from "./data"
const ListTodo = () => {
const [sections, setSections] = useState([
    {name:"Выполненные задачи",
        isOpen:true},
    {name:"Задачи на сегодня",
        isOpen:false},
    {name:"Предстоящие задачи",
        isOpen:false},
])
console.log(sections)
function toggleClass(id) {
    setSections(sections.map((section,idx)=>{
        if (id === idx) {
            return {...section, isOpen : !section.isOpen}
        }
        else if (id !== idx){
            return {...section, isOpen : false}
        }
  
    }))
   
}
  return (
    <div className={style.ListTodo}>
        <h2 className={style.ListTodo__header}>Задачи</h2>
        <div className={style.ListTodo__heads}>
            <div>Дата</div>
            <div>Шифр задачи</div>
            <div>Шифр проекта</div>
            <div>Задача</div>
            <div>Статус</div>
            <div>Ответственный</div>
            <div>Переназначить</div>
            <div>Приоритет</div>
            <div>Комментарий</div>
            <div>План время</div>
            <div>Факт время</div>
            <div>Начал</div>
            <div>Завершил</div>
        </div>
        <div className={style.ListTodo__sections}>
        {sections.map((section,id)=>{
            return ( <div className={style.ListTodo__section} key={id}>
                    <div onClick={()=>toggleClass(id)}>{section.name}
                    {section.isOpen && <img className={style.upDownpics} src={upPic} alt="upPic"/>}
                    {!section.isOpen && <img className={style.upDownpics} src={downPic} alt="downPic"/>}
                    </div>
                    <div className={section.isOpen ? style.open : style.close}>
                        {dataExample.map((example,id)=>{
                            return (   
                            <div className={style.listItem} key = {id}>
                            <div>{example.data}</div>
                            <div>{example.toDoCode}</div>
                            <div>{example.projectCode}</div>
                            <div>{example.todo}</div>
                            <div>
                            <select>{example.status.map((statusElm,id)=>{
                                return ( 
                                    <option key ={id} value={statusElm}>{statusElm}</option>
                                    )
                            })}</select>
                            </div>
                            <div>{example.responsible}</div>
                            <div>{example.reassign}</div>
                            <div>{example.priority}</div>
                            <div>{example.comment}</div>
                            <div>{example.planTime}</div>
                            <div>{example.factTime}</div>
                            <div>{example.begin}</div>
                            <div>{example.finish}</div>
                            </div>)
                        })}
                    </div>
                 </div>)
        })}
          </div>
    </div>
  )
}

export default ListTodo