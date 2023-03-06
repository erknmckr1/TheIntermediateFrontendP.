import React from "react";
import {marked} from 'marked'
import { useDispatch, useSelector } from "react-redux";
import { writeText } from "../redux/MarkdownSlice";
function Section() {
  const textCurrent = useSelector((state) => state.markdown.textCurrent);
  const isHelpOkey = useSelector((state) => state.markdown.isHelpOkey);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(writeText(e.target.value));
  };

  // asagıdaki islemde marked fonksıyonunu kullanarak textCurrent isimli parametreyi Markdown formatından Html formatına donusuturduk. sanitize ozellıgı guvenlık acıklarını ortmemızı saglar 
  const parseHtml = marked(textCurrent, {sanitize:true});

  return (
    <div className="section">
      <textarea
        readOnly={isHelpOkey}
        onChange={handleChange}
        value={textCurrent}
        className="left_page  card"
      >
        asdasd
      </textarea>
      <div 
      className="right_page  card" 
      dangerouslySetInnerHTML={{__html:parseHtml}}
      >
      
      </div>
    </div>
  );
}

export default Section;
