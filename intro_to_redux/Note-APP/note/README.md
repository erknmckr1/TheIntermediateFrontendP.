# React ile Note App
- Redux toolkit
- Local Storages
- Bootstrap


### Hatırlatma

npm install bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


--
fontawesome

npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/react-fontawesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

---
useEffect, React component'lerinde state veya props değiştiğinde belirli işlemlerin yapılmasını sağlar. Bu işlemler component'in ilk yüklenmesinde, state veya props değiştiğinde veya component'in unmount edilmesinden önce yapılabilir.

const notes = useSelector((state) => state.notes.notes);
  const [filteredNote, setFilteredNote] = useState(notes);
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    setFilteredNote(notes)
    console.log(filteredNote)
  },[notes])

  notes guncellendıkce fılteredNote degerı de degısecek. 

  ---
  localStorage.setItem("notes",JSON.stringify(state.notes))
  localStorage.getItem("notes")